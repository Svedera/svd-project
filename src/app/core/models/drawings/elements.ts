export class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Size {
  height: number;
  width: number;

  constructor(
    height: number,
    width: number) {

    this.height = height;
    this.width = width;
  }
}

export class Offset {
  top: number;
  bottom: number;
  left: number;
  right: number;

  constructor(
    top: number = 0,
    bottom: number = 0,
    left: number = 0,
    right: number = 0) {

    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
  }
}
