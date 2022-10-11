import { Component, Input } from '@angular/core';
import { OperationCategory } from '@backend-models/finance/operationCategory';

@Component({
  selector: 'svd-operation-category',
  templateUrl: './operation-category.component.html',
  styleUrls: ['./operation-category.component.css']
})
export class OperationCategoryComponent {
  @Input() operationCategory: OperationCategory | null = null;

}
