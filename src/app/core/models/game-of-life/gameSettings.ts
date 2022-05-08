import { GameSpeed } from '@enums/gameSpeed';

export class GameSettings {
  gridWidth: number;
  gridHeight: number;
  initialLifePercentage: number;
  speed: GameSpeed;

  constructor(
    gridWidth: number,
    gridHeight: number,
    initialLife: number,
    speed: GameSpeed) {
    this.gridHeight = gridHeight;
    this.gridWidth = gridWidth;
    this.initialLifePercentage = initialLife;
    this.speed = speed;
  }
}
