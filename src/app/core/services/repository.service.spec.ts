import { TestBed } from '@angular/core/testing';

import {
  AuditableOperationCategory,
  OperationCategory,
  OperationCategoryRequest
} from '@backend-models/finance/operationCategory';
import { RepositoryService } from './repository.service';

describe('RepositoryService', () => {
  let service: RepositoryService<
    AuditableOperationCategory,
    OperationCategory,
    OperationCategoryRequest>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
