import { Guid } from 'guid-typescript';

// TODO: think how to implement model better
export class RepeatingOperation {
  operationId: Guid;
  name: string;
  value: number;
  repeatDay: number;

  constructor(
    repeatingOperationId: Guid,
    name: string,
    value: number,
    repeatDay: number) {

    this.operationId = repeatingOperationId;
    this.repeatDay = repeatDay;
    this.name = name;
    this.value = value;
  }
}
