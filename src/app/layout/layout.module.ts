import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {
  DefaultContentComponent
} from './default-content/default-content.component';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    DefaultContentComponent
  ],
  exports: [
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule {
}
