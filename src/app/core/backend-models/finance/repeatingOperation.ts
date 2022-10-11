import { Guid } from 'guid-typescript';

// TODO: think how to implement model better
export class RepeatingOperation {
  repeatingOperationId: Guid;
  name: string;
  value: number;
  repeatDay: number;

  constructor(
    repeatingOperationId: Guid,
    name: string,
    value: number,
    repeatDay: number) {

    this.repeatingOperationId = repeatingOperationId;
    this.repeatDay = repeatDay;
    this.name = name;
    this.value = value;
  }

}
