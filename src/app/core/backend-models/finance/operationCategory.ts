import { Guid } from 'guid-typescript';

export class OperationCategory {
  operationId: Guid;
  name: string;

  constructor(
    operationId: Guid,
    name: string) {

    this.operationId = operationId;
    this.name = name;
  }
}
