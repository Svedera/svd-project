import { Guid } from 'guid-typescript';

import { AccountRequest } from './account';
import { Operation } from './operation';
import { AuditableEntity } from '@backend-models/auditableEntity';
import { IdentifiableEntity } from '@models/identifiableEntity';

export class PiggyBankRequest extends AccountRequest {
  targetValue: number;

  constructor(
    name: string,
    currentValue: number,
    userId: Guid,
    operations: Operation[] = [],
    targetValue: number) {

    super(
      name,
      currentValue,
      userId,
      operations);

    this.targetValue = targetValue;
  }
}

export class PiggyBank
  extends AuditableEntity
  implements PiggyBankRequest, IdentifiableEntity {

  piggyBankId: Guid;
  name: string;
  currentValue: number;
  userId: Guid;
  targetValue: number;
  operations: Operation[];

  constructor(
    ownerId: Guid,
    owner: string,
    createdDate: Date,

    accountId: Guid,
    name: string,
    currentValue: number,
    userId: Guid,
    targetValue: number,
    operations: Operation[] = [],

    lastModifiedById: Guid | null = null,
    lastModifiedBy: string | null = null,
    lastModifiedDate: Date | null = null) {

    super(
      ownerId,
      owner,
      createdDate,
      lastModifiedById,
      lastModifiedBy,
      lastModifiedDate);

    this.piggyBankId = accountId;
    this.name = name;
    this.currentValue = currentValue;
    this.userId = userId;
    this.targetValue = targetValue;
    this.operations = operations;
  }

  getId = (): Guid => this.piggyBankId;
}
