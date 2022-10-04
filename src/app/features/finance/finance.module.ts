import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import {
  FinanceDashboardComponent
} from './finance-dashboard/finance-dashboard.component';

@NgModule({
  declarations: [
    FinanceDashboardComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FinanceDashboardComponent
  ]
})
export class FinanceModule { }
