import { Guid } from 'guid-typescript';

import { AuditableEntity } from '@backend-models/auditableEntity';
import { OperationType } from '@enums/finance/operationType';
import { AuditableOperationCategory } from './operationCategory';
import { IdentifiableEntity } from '@models/identifiableEntity';

export class OperationRequest {
  name: string;
  category: AuditableOperationCategory;
  type: OperationType;
  value: number;
  date: Date;
  accountId: Guid;


  constructor(
    name: string,
    category: AuditableOperationCategory,
    type: OperationType,
    value: number,
    date: Date,
    accountId: Guid) {


    this.name = name;
    this.category = category;
    this.type = type;
    this.value = value;
    this.accountId = accountId;
    this.date = date;
  }
}

export class Operation
  extends AuditableEntity
  implements OperationRequest, IdentifiableEntity {

  operationId: Guid;
  name: string;
  category: AuditableOperationCategory;
  type: OperationType;
  value: number;
  date: Date;
  accountId: Guid;

  constructor(
    ownerId: Guid,
    owner: string,
    createdDate: Date,

    operationId: Guid,
    name: string,
    category: AuditableOperationCategory,
    type: OperationType,
    value: number,
    date: Date,
    accountId: Guid,

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

    this.operationId = operationId;
    this.name = name;
    this.category = category;
    this.type = type;
    this.value = value;
    this.accountId = accountId;
    this.date = date;
  }

  getId = (): Guid => this.operationId;
}
