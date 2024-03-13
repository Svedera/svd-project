import { interval, BehaviorSubject, Observable, Subscription } from 'rxjs';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { CellState, CellStyle } from '@models/game-of-life/cellState';
import { GameState } from '@models/game-of-life/gameState';
import { GameSettings } from '@models/game-of-life/gameSettings';
import { GameSpeed } from '@enums/gameSpeed';

@UntilDestroy()
export class GameOfLifeService {
  private readonly secondsToMs = 1000;
  private _gameSettings: GameSettings;
  private _gameCycle: Observable<number> | null = null;
  private _cycleSubscription: Subscription | null = null;

  private _gameStateSubject = new BehaviorSubject(GameState.NotStarted);
  private _cellsSubject = new BehaviorSubject<CellState[][]>([]);
  private _alivePercentageSubject = new BehaviorSubject(0);

  public get state(): Observable<GameState> {
    return this._gameStateSubject.asObservable();
  }

  public get cells(): Observable<CellState[][]> {
    return this._cellsSubject.asObservable();
  }

  public get alivePercentage(): Observable<number> {
    return this._alivePercentageSubject.asObservable();
  }

  private _totalCells = 0;

  constructor(settings: GameSettings) {
    this._gameSettings = settings;
    this._totalCells = settings.gridHeight * settings.gridWidth;
  }

  restart(settings: GameSettings) {
    this.end();
    this._gameSettings = settings;
    this._totalCells = settings.gridHeight * settings.gridWidth;
    this.start();
  }

  start() {
    const initial = this.getInitialLife();
    this._cellsSubject.next(initial);

    const secondsPerCycle =
      this.getSecondsPerCycle(this._gameSettings.speed);

    this._gameCycle =
      interval(secondsPerCycle * this.secondsToMs);
    this._cycleSubscription = this._gameCycle
      .pipe(untilDestroyed(this))
      .subscribe(_ => this.nextCycle());

    this._gameStateSubject.next(GameState.Ongoing);
  }

  pause() {
    this._gameStateSubject.next(GameState.Paused);
  }

  unpause() {
    this._gameStateSubject.next(GameState.Ongoing);
  }

  end() {
    this._cycleSubscription?.unsubscribe();
    this._gameStateSubject.next(GameState.Ended);
  }

  private getInitialLife(): CellState[][] {
    let rows = this._gameSettings.gridHeight;
    let columns = this._gameSettings.gridWidth;
    let initial: CellState[][] = [];

    let alive = 0;

    for (var row: number = 0; row < rows; row++) {
      initial[row] = [];
      for (var column: number = 0; column < columns; column++) {
        if (initial[row][column]?.value === 1) {
          continue;
        }

        const value =
          this.generateCellValue(this._gameSettings.initialLifePercentage);

        alive += value;

        const style = value === 1 ? CellStyle.Alive : CellStyle.NotBorn;
        initial[row][column] = { value, style };
      }
    }

    const percentage = Math.round(alive / this._totalCells * 100);
    this._alivePercentageSubject.next(percentage);

    return initial;
  }

  private generateCellValue(aliveProbability: number): number {
    const chance = this.randomNumber(1, 100);
    return chance <= aliveProbability ? 1 : 0;
  }

  private randomNumber = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1) + min)

  private nextCycle(): void {
    if (this._gameStateSubject.value !== GameState.Ongoing) {
      return;
    }

    let anyChanges = false;
    let alive = 0;

    let currentCells = this._cellsSubject.value;
    let rows = this._gameSettings.gridHeight;
    let columns = this._gameSettings.gridWidth;

    let future: CellState[][] = [];

    // Loop through every cell
    for (let row = 0; row < rows; row++) {
      future[row] = [];
      for (let column = 0; column < columns; column++) {

        let aliveNeighbors = 0
        for (let rowIterator = -1; rowIterator < 2; rowIterator++) {
          for (let columnIterator = -1; columnIterator < 2; columnIterator++) {

            if (columnIterator === 0 && rowIterator === 0) {
              continue;
            }

            let neighborRow = row + rowIterator;
            let neighborColumn = column + columnIterator;

            if (neighborRow < 0 || neighborColumn < 0 ||
              neighborRow >= rows || neighborColumn >= columns) {
              continue;
            }

            aliveNeighbors +=
              currentCells[row + rowIterator][column + columnIterator].value
          }
        }

        // Apply the Rules of Life
        let currentValue = currentCells[row][column].value;
        let futureValue = currentValue;
        let futureStyle = currentCells[row][column].style;

        // Cell either lonely or overpopulated and dead
        if (aliveNeighbors < 2 || aliveNeighbors > 3) {
          futureValue = 0;
          futureStyle = CellStyle.Dead;
        }
        else if (aliveNeighbors === 3) {
          futureValue = 1;
          futureStyle = CellStyle.Alive;
        }

        if (!anyChanges && futureValue !== currentValue) {
          anyChanges = true;
        }

        alive += futureValue;

        future[row][column] = {
          value: futureValue,
          style: futureStyle
        }
      }
    }

    if (!anyChanges) {
      this.end();
      return;
    }

    this._cellsSubject.next(future);

    const percentage = Math.ceil(alive / this._totalCells * 100);
    this._alivePercentageSubject.next(percentage);
  }

  private getSecondsPerCycle(speed: GameSpeed): number {
    switch (speed) {
      case GameSpeed.Fast: return 0.3;
      case GameSpeed.Slow: return 1;
      default: return 0.5;
    }
  }
}
