import { Size } from '@models/drawings/elements';
import { CanvasNotInitializedError } from '@models/drawings/errors';
import { LineSettings } from '@models/drawings/settings';
import { AlgorithmVisualizer } from '@services/abstract/algorithmVisualizer';
import { sleep } from '@shared/utilities/utilities';

export class AlgorithmVisualizationService implements AlgorithmVisualizer {

  private canvas: HTMLCanvasElement | null = null;
  private context: CanvasRenderingContext2D | null = null;

  private readonly lineSettings: LineSettings = new LineSettings(
    'round',
    'round',
    10,
    100
  )

  private readonly canvasSize: Size = {
    width: 500,
    height: 500
  }

  private currentX = Infinity;
  private currentY = Infinity;
  private colorHue = 0;
  private backgroundColor = 'white';
  private contextSelector = '2d';

  private circleRadius = 20;
  private spacing = 70; // distance between the centers of two adjacent circles

  initializeCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.resizeCanvas(this.canvasSize);

    var contextValue = this.canvas?.getContext(this.contextSelector);

    if (contextValue == null) {
      const message =
        `${this.contextSelector} context is not defined in the canvas`;
      throw new Error(message);
    }

    this.context = contextValue! as CanvasRenderingContext2D;
    this.context.fillStyle = this.backgroundColor;
    this.context.fill();
    this.context.lineJoin = this.lineSettings.lineJoin;
    this.context.lineCap = this.lineSettings.lineCap;
    this.context.lineWidth = this.lineSettings.lineWidth;
  }

  drawArray(currentArray: number[]) {
    this.checkIsInitialized();

    this.context!.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
    for (let i = 0; i < currentArray.length; i++) {
      const xPos = currentArray[i];
      const yPos = this.canvas!.height / 2; // middle of the canvas

      this.context!.beginPath();
      this.context!.arc(xPos, yPos, this.circleRadius, 0, Math.PI * 2);
      this.context!.fill();

      // Drawing the number inside the circle
      this.context!.fillStyle = 'white';
      this.context!.textAlign = 'center';
      this.context!.textBaseline = 'middle';
      this.context!.font = '16px Arial';
      this.context!.fillText(currentArray[i].toString(), xPos, yPos);
      this.context!.fillStyle = 'black'; // Reset fill color for the next circle
    }
  }

  async visualizerIteration(current_array: number[],
    first_element_index: number,
    second_element_index: number) {
    const steps = 20; // number of steps for the animation
    const duration = 25; // duration for each step in milliseconds
    const element_width = this.circleRadius * 2 + this.spacing
    const aStartX = element_width * first_element_index + this.circleRadius;
    const bStartX = element_width * second_element_index + this.circleRadius;

    const aEndX = bStartX;
    const bEndX = aStartX;

    for (let i = 0; i <= steps; i++) {
      const t = i / steps; // normalization factor
      current_array[first_element_index] = (1 - t) * aStartX + t * aEndX;
      current_array[second_element_index] = (1 - t) * bStartX + t * bEndX;

      await this.drawArray(current_array);
      await sleep(duration);
    }

    [current_array[first_element_index], current_array[second_element_index]] =
      [current_array[second_element_index], current_array[first_element_index]];
  }

  resizeCanvas(size: Size) {
    if (this.canvas == null) {
      throw new CanvasNotInitializedError();
    }

    this.canvas!.width = size.width;
    this.canvas!.height = size.height;
  };

  checkIsInitialized() {
    if (this.canvas == null || this.context == null) {
      throw new CanvasNotInitializedError();
    }
  }
}
