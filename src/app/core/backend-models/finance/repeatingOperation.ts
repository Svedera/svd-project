import { Guid } from 'guid-typescript';

// TODO: think how to implement model better
export class RepeatingOperation {
  repeatingOperationId: Guid;
  name: string;
  value: number;
  repeatDay: number;

}
