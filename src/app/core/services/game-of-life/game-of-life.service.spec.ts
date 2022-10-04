import { TestBed } from '@angular/core/testing';

import { GameOfLifeService } from './game-of-life.service';

describe('GameOfLifeService', () => {
  let service: GameOfLifeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameOfLifeService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
