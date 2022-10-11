import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import {
  FinanceDashboardComponent
} from './finance-dashboard/finance-dashboard.component';
import {
  OperationCategoryComponent
} from './operation-category/operation-category.component';
import { AccountComponent } from './account/account.component';
import { OperationComponent } from './operation/operation.component';

@NgModule({
  declarations: [
    FinanceDashboardComponent,
    OperationCategoryComponent,
    AccountComponent,
    OperationComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FinanceDashboardComponent
  ]
})
export class FinanceModule { }
