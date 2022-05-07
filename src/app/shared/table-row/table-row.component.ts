import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef
} from '@angular/core';

import { RowData } from '@models/tableData';

@Component({
  selector: 'svd-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent<T> {
  @Input() selected: boolean = false;
  @Input() row: RowData<T> | null = null;
  @Input() detailTemplate: TemplateRef<unknown> | null = null;

  @Output() selectRow = new EventEmitter<number>();
}
