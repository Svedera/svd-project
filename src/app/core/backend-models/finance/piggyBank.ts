import { Guid } from 'guid-typescript';
import { Account } from './account';
import { Operation } from './operation';

export class PiggyBank implements Account {
  accountId: Guid;
  name: string;
  currentValue: number;
  userId: Guid;
  targetValue: number;
  operations: Operation[];

  constructor(
    accountId: Guid,
    name: string,
    currentValue: number,
    userId: Guid,
    targetValue: number,
    operations: Operation[] = []) {

    this.accountId = accountId;
    this.name = name;
    this.currentValue = currentValue;
    this.userId = userId;
    this.targetValue = targetValue;
    this.operations = operations;
  }
}
