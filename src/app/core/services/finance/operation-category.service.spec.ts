import { TestBed } from '@angular/core/testing';

import { OperationCategoryService } from './operation-category.service';

describe('OperationCategoryService', () => {
  let service: OperationCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
