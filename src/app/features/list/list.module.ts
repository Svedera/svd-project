import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [
    ListComponent
  ],
  exports:[
    ListComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ListModule {
}
