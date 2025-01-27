import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AlgorithmsComponent } from './algorithms.component';
import {
  SortingAnimationComponent
} from './sorting-animation/sorting-animation.component';

@NgModule({
  declarations: [
    AlgorithmsComponent,
    SortingAnimationComponent
  ],
  exports: [
    AlgorithmsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AlgorithmsModule {
}