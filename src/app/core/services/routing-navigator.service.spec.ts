import { TestBed } from '@angular/core/testing';

import { RoutingNavigatorService } from './routing-navigator.service';

describe('RoutingNavigatorService', () => {
  let service: RoutingNavigatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingNavigatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
