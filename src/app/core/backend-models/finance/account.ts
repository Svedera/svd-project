
import { Guid } from 'guid-typescript';

import { AuditableEntity } from '@backend-models/auditableEntity';
import { Operation } from './operation';
import { IdentifiableEntity } from '@models/identifiableEntity';

export class AccountRequest {
  name: string;
  currentValue: number;
  userId: Guid;
  operations: Operation[];

  constructor(
    name: string,
    currentValue: number,
    userId: Guid,
    operations: Operation[] = []) {

    this.name = name;
    this.currentValue = currentValue;
    this.userId = userId;
    this.operations = operations;
  }
}

export class Account
  extends AuditableEntity
  implements AccountRequest, IdentifiableEntity {

  accountId: Guid;
  name: string;
  currentValue: number;
  userId: Guid;
  operations: Operation[];

  constructor(
    ownerId: Guid,
    owner: string,
    createdDate: Date,

    accountId: Guid,
    name: string,
    currentValue: number,
    userId: Guid,
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

    this.accountId = accountId;
    this.name = name;
    this.currentValue = currentValue;
    this.userId = userId;
    this.operations = operations;
  }

  getId = (): Guid => this.accountId;
}
