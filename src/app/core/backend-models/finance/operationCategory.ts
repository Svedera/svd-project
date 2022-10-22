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
  extends AuditableEntity
  implements OperationCategoryRequest, IdentifiableEntity {

  operationCategoryId: Guid;
  name: string;
  color: string;

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

    super(
      ownerId,
      owner,
      createdDate,
      lastModifiedById,
      lastModifiedBy,

      lastModifiedDate);

    this.operationCategoryId = operationId;
    this.name = name;
    this.color = color;
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
