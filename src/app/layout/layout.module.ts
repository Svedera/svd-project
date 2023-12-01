import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {
  DefaultContentComponent
} from './default-content/default-content.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    DefaultContentComponent,
    LayoutComponent,
    MenuItemComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    SharedModule
  ]
})
export class LayoutModule {
}
