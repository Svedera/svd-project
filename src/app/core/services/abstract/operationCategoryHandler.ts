import {
  AuditableOperationCategory,
  OperationCategory,
  OperationCategoryRequest
} from '@backend-models/finance/operationCategory';
import { RepositoryHandler } from './repositoryHandler';

export abstract class OperationCategoryHandler
  extends RepositoryHandler<
    AuditableOperationCategory,
    OperationCategory,
    OperationCategoryRequest> {

}
