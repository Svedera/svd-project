import { Guid } from 'guid-typescript';
import { Operation } from './operation';

export class Account {
  accountId: Guid;
  name: string;
  currentValue: number;
  userId: Guid;
  operations: Operation[];

  constructor(
    accountId: Guid,
    name: string,
    currentValue: number,
    userId: Guid,
    operations: Operation[] = []) {

    this.accountId = accountId;
    this.name = name;
    this.currentValue = currentValue;
    this.userId = userId;
    this.operations = operations;
  }
}
