export enum CellStyle {
  Unknown = '',
  Alive = 'alive',
  Dead = 'grave',
  NotBorn = ''
}

export class CellState {
  style: CellStyle;
  value: number;

  constructor(
    style: CellStyle,
    value: number) {
    this.style = style;
    this.value = value
  }
}
