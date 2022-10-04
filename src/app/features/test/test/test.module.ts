import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TestComponent
  ]
})
export class TestModule { }
