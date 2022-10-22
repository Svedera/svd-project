import { TestBed } from '@angular/core/testing';

import {
  OperationCategory,
  OperationCategoryRequest
} from '@backend-models/finance/operationCategory';
import { RepositoryService } from './repository.service';

describe('RepositoryService', () => {
  let service: RepositoryService<OperationCategory, OperationCategoryRequest>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
