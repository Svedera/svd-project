import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { GameOfLifeComponent } from './game-of-life.component';

@NgModule({
  declarations: [
    GameOfLifeComponent
  ],
  exports: [
    GameOfLifeComponent
  ],
  imports: [
    SharedModule
  ]
})
export class GameOfLiveModule {
}
