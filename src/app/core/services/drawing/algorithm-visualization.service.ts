import { Size } from '@models/drawings/elements';
import { CanvasNotInitializedError } from '@models/drawings/errors';
import { LineSettings } from '@models/drawings/settings';
import { AlgorithmVisualizer } from '@services/abstract/algorithmVisualizer';

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

  // SVETA TODO: move to settings
  private backgroundColor = 'white';
  private contextSelector = '2d';

  private circleRadius = 20;
  private spacing = 70; // distance between the centers of two adjacent circles

  private animationFrameNumber = 20;

  private get elementCenterDistance(): number {
    return this.circleRadius + this.spacing;
  }

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

    }
  }

  drawElement

  async visualizeElementSwitch(
    current_array: number[],
    first_element_index: number,
    second_element_index: number) {

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
