import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { GameSettings } from '@models/game-of-life/gameSettings';
import { GameOfLifeService } from '@services/game-of-life.service';
import { GameSpeed } from '@enums/gameSpeed';
import { GameState } from '@models/game-of-life/gameState';

@UntilDestroy()
@Component({
  selector: 'svd-game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.css']
})
export class GameOfLifeComponent implements OnInit {
  GameState = GameState;

  game: GameOfLifeService;

  widthOptions: number[];
  heightOptions: number[];
  initialLifeOptions: number[];
  speedOptions: GameSpeed[];
  gameSettings: GameSettings;

  form: FormGroup;
  state: GameState = GameState.NotStarted;
  alivePercentage: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.widthOptions = this.getValuesArray(7, 10);
    this.heightOptions = this.getValuesArray(5, 10);
    this.initialLifeOptions = this.getValuesArray(10, 10);
    this.speedOptions = this.getSpeedOptions();
    this.gameSettings = this.getInitialSettings();
    this.form = this.getForm(this.gameSettings);
    this.game = new GameOfLifeService(this.gameSettings);
  }

  ngOnInit(): void {
    this.game.state.pipe(untilDestroyed(this))
      .subscribe(value => this.state = value);
    this.game.alivePercentage.pipe(untilDestroyed(this))
      .subscribe(value => this.alivePercentage = value);
  }

  restart(): void {
    const settings = this.getFormSettings();
    this.game.restart(settings);
  }

  private getValuesArray = (size: number, step: number) =>
    Array(size).fill(0).map((x, i) => (i + 1) * step)

  private getSpeedOptions = () => [
    GameSpeed.Slow,
    GameSpeed.Normal,
    GameSpeed.Fast
  ]

  private getInitialSettings = (): GameSettings => ({
    gridWidth: 70,
    gridHeight: 30,
    speed: GameSpeed.Normal,
    initialLifePercentage: 50
  })

  private getForm(settings: GameSettings) {
    return this.formBuilder.group({
      gridWidth: [
        settings.gridWidth,
        [Validators.required]],
      gridHeight: [
        settings.gridHeight,
        [Validators.required]],
      initialLifePercentage: [
        settings.initialLifePercentage,
        [Validators.required]],
      speed: [
        settings.speed,
        [Validators.required]]
    });

  }

  private getFormSettings(): GameSettings {
    // eslint-disable-next-line no-console
    console.warn(this.form.value)
    return this.form.value;
  };
}
