import { TestBed, TestModuleMetadata } from '@angular/core/testing';

import { beforeEach, describe, expect, test } from '@jest/globals';

import { GameOfLifeService } from './game-of-life.service';
import { GameSettings } from '@models/game-of-life/gameSettings';
import { GameSpeed } from '@enums/gameSpeed';

const getModuleMetadata = (
  gameSettingsMock: GameSettings): TestModuleMetadata => ({
    providers: [
      {
        provide: GameOfLifeService,
        useFactory: () => new GameOfLifeService(gameSettingsMock),
      },

    ]
  });

describe('GameOfLifeService', () => {
  let gameOfLifeService: GameOfLifeService;
  const gameSettingsMock: GameSettings = {
    gridWidth: 10,
    gridHeight: 20,
    initialLifePercentage: 20,
    speed: GameSpeed.Normal
  }

  beforeEach(() => {
    TestBed.configureTestingModule(getModuleMetadata(gameSettingsMock));
    gameOfLifeService = TestBed.inject(GameOfLifeService);
  });

  test('should be created', () => {
    expect(gameOfLifeService).toBeTruthy();
  });
});
