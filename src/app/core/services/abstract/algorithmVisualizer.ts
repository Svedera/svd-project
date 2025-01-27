import { Size } from '@models/drawings/elements';

export abstract class AlgorithmVisualizer {
  abstract visualizeElementSwitch: (current_array: number[],
    first_element_index: number,
    second_element_index: number) => void;
  abstract initializeCanvas: (canvas: HTMLCanvasElement) => void;
  abstract resizeCanvas: (size: Size) => void;
}
