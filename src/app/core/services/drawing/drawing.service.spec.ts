import { TestBed } from '@angular/core/testing';

import { DrawingService } from './drawing.service';

describe('DrawingService', () => {
  let service: DrawingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  test('should be created', () => {
    service = new DrawingService();
    expect(service).toBeTruthy();
  });
});
