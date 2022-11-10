import { Guid } from 'guid-typescript';

import { AuditableEntity } from '@backend-models/auditableEntity';
import { IdentifiableEntity } from '@models/identifiableEntity';

export class OperationCategoryRequest {
  name: string;
  color: string;

  constructor(
    name: string,
    color: string) {

    this.name = name;
    this.color = color;
  }
}

export class OperationCategory
  extends OperationCategoryRequest
  implements IdentifiableEntity {

  operationCategoryId: Guid;

  constructor(
    operationCategoryId: Guid,
    name: string,
    color: string) {

    super(name, color);
    this.operationCategoryId = operationCategoryId;
  }

  getUpdated(request: OperationCategoryRequest): OperationCategory {
    const updated = {
      ...this,
      color: request.color,
      name: request.name
    }

    return updated;
  }

  getId = (): Guid => this.operationCategoryId;
}

export class AuditableOperationCategory
  extends OperationCategory
  implements AuditableEntity, IdentifiableEntity {

  readonly ownerId: Guid;
  readonly owner: string;
  readonly createdDate: Date;

  readonly lastModifiedById: Guid | null = null;
  readonly lastModifiedBy: string | null = null
  readonly lastModifiedDate: Date | null = null

  constructor(
    ownerId: Guid,
    owner: string,
    createdDate: Date,

    operationId: Guid,
    name: string,
    color: string,

    lastModifiedById: Guid | null = null,
    lastModifiedBy: string | null = null,
    lastModifiedDate: Date | null = null) {

    super(operationId, name, color);

    this.ownerId = ownerId;
    this.owner = owner;
    this.createdDate = createdDate;

    this.lastModifiedById = lastModifiedById;
    this.lastModifiedBy = lastModifiedBy;
    this.lastModifiedDate = lastModifiedDate;
  }
}
