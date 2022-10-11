import { Guid } from 'guid-typescript';

export class OperationCategory {
  operationId: Guid;
  name: string;
  color: string;

  constructor(
    operationId: Guid,
    name: string,
    color: string) {

    this.operationId = operationId;
    this.name = name;
    this.color = color;
  }
}
