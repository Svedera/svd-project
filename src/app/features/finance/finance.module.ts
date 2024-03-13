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
import {
  OperationCategoryListComponent
} from './operation-category/list/operation-category-list.component';

@NgModule({
  declarations: [
    FinanceDashboardComponent,
    OperationCategoryComponent,
    AccountComponent,
    OperationComponent,
    OperationCategoryListComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FinanceDashboardComponent
  ]
})
export class FinanceModule { }
