export class LineSettings {
  lineJoin: CanvasLineJoin;
  lineCap: CanvasLineCap;
  lineWidth: number;
  movePrecision: number;

  constructor(
    lineJoin: CanvasLineJoin,
    lineCap: CanvasLineCap,
    lineWidth: number,
    movePrecision: number) {

    this.lineCap = lineCap;
    this.lineJoin = lineJoin;
    this.lineWidth = lineWidth;
    this.movePrecision = movePrecision;
  }
}
