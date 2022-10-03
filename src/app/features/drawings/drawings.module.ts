import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { DrawingsComponent } from './drawings.component';
import { LeftToolbarComponent } from './left-toolbar/left-toolbar.component';
import { RightToolbarComponent } from './right-toolbar/right-toolbar.component';
import { SceneComponent } from './scene/scene.component';

@NgModule({
  declarations: [
    DrawingsComponent,
    SceneComponent,
    LeftToolbarComponent,
    RightToolbarComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    DrawingsComponent
  ]
})
export class DrawingModule { }
