
import { Guid } from 'guid-typescript';

import { AuditableEntity } from '@backend-models/auditableEntity';
import {
  AuditableOperationCategory, OperationCategory, OperationCategoryRequest
} from '@backend-models/finance/operationCategory';
import { getAuditableEntityMock } from './auditable-entity';

export const getOperationCategoryArrayMock =
  (): AuditableOperationCategory[] => ([
    getOperationCategoryFood(),
    getOperationCategoryPets()
  ]);

export const getOperationCategoryFood = (): AuditableOperationCategory => {

  const id = Guid.create();
  const request =
    new OperationCategory(id, 'Food', '#FF5733');
  const category =
    getOperationCategoryMock(request);

  return category;
}

export const getOperationCategoryPets =
  (): AuditableOperationCategory => {

    const id = Guid.create();
    const request =
      new OperationCategory(id, 'Pets', '#6032a8');
    const category =
      getOperationCategoryMock(request);

    return category;
  }

export const getOperationCategoryByRequestMock =
  (request: OperationCategoryRequest): AuditableOperationCategory => {

    const id = Guid.create();
    const operationCategory =
      new OperationCategory(id, request.name, request.color);
    const auditable = getAuditableEntityMock();
    const category =
      wrapOperationCategoryRequestMock(operationCategory, auditable);

    return category;
  }

export const getOperationCategoryMock =
  (operationCategory: OperationCategory): AuditableOperationCategory => {

    const auditable = getAuditableEntityMock();
    const category =
      wrapOperationCategoryRequestMock(operationCategory, auditable);

    return category;
  }

export const wrapOperationCategoryRequestMock =
  (category: OperationCategory,
    auditable: AuditableEntity): AuditableOperationCategory => {

    return new AuditableOperationCategory(
      auditable.ownerId,
      auditable.owner,
      auditable.createdDate,

      category.operationCategoryId,
      category.name,
      category.color,

      auditable.lastModifiedById,
      auditable.lastModifiedBy,
      auditable.lastModifiedDate
    );
  }
