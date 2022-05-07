import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {
  DefaultContentComponent
} from './default-content/default-content.component';
import {
  RemoteStateWrapperComponent
} from './remote-state-wrapper/remote-state-wrapper.component';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    DefaultContentComponent,
    RemoteStateWrapperComponent
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    RemoteStateWrapperComponent
  ],
  imports: [
    SharedModule
  ]
})
export class LayoutModule {
}
