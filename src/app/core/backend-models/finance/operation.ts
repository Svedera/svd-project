import { OperationType } from '@enums/finance/operationType';
import { Guid } from 'guid-typescript';
import { OperationCategory } from './operationCategory';

export class Operation {
  operationId: Guid;
  name: string;
  category: OperationCategory;
  type: OperationType;
  value: number;
  date: Date;
  accountId: Guid;
  userId: Guid;

  constructor(
    operationId: Guid,
    name: string,
    category: OperationCategory,
    type: OperationType,
    value: number,
    date: Date,
    accountId: Guid,
    userId: Guid) {

    this.operationId = operationId;
    this.name = name;
    this.category = category;
    this.type = type;
    this.value = value;
    this.accountId = accountId;
    this.date = date;
    this.userId = userId;
  }
}
