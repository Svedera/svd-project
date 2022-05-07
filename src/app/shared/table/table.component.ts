import {
  Component,
  Input,
  OnInit,
  TemplateRef
} from '@angular/core';

import { Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Guid } from 'guid-typescript';

import { PagingBase, PagingView } from '@models/pagingData';
import {
  ColumnDataBase, ColumnView
} from '@models/tableData';
import { SortingOrder } from '@enums/sortingType';

@UntilDestroy()
@Component({
  selector: 'svd-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent<T> implements OnInit {
  @Input() columnsStream: Observable<ColumnDataBase<T>[] | null> | null = null;
  @Input() recordsStream: Observable<T[]> | null = null;
  @Input() pagingStream: Observable<PagingBase | null> | null = null;
  @Input() detailTemplate: TemplateRef<unknown> | null = null;

  sortingColumn: ColumnDataBase<T> | null = null;
  sortedRecords: T[] = [];

  columns: ColumnDataBase<T>[] | null = null;
  columnViews: ColumnView[] | null = null;
  columnsCount = 0;

  paging: PagingBase | null = null;
  pagingView: PagingView | null = null;

  selectedRow: number | null = null;
  private originalOrderRecords: T[] = [];

  ngOnInit(): void {
    this.recordsStream?.pipe(untilDestroyed(this))
      .subscribe(records => {
        this.sortedRecords = [...records];
        this.originalOrderRecords = [...records];
      });
    this.pagingStream?.pipe(untilDestroyed(this))
      .subscribe(pagingData => {
        this.paging = pagingData;

        if (pagingData == null) {
          return;
        }
        this.pagingView = pagingData.pagingView;
      });
    this.columnsStream?.pipe(untilDestroyed(this))
      .subscribe(columns => {
        this.columns = columns;

        if (columns == null) {
          return;
        }
        this.columnsCount = columns.length;
        this.columnViews = this.getColumnViews(columns);
      });
  }

  selectRow(index: number) {
    if(index === this.selectedRow){
      this.selectedRow = null;
      return
    }
    this.selectedRow = index;
  }

  sortColumn = (columnId: Guid) => {
    this.selectedRow = null;

    let sortingColumn: ColumnDataBase<T> | null = null;
    this.columns!.forEach(column => {
      if (column.id === columnId) {
        column.switchSortingOrder();
        sortingColumn = column;
      } else {
        column.setSortingToDefault();
      }
    });

    if (sortingColumn == null) {
      throw new Error(`Column with id ${columnId} does not exist`);
    }

    this.columnViews = this.getColumnViews(this.columns!);
    this.sortBy(sortingColumn!);

  }

  shiftPage(shift: number) {
    this.selectedRow = null;

    this.paging!.shiftPage(shift);
    this.pagingView = this.paging!.pagingView;
  }

  private sortBy(column: ColumnDataBase<T>): void {
    if (column!.compareFunction == null) {
      return;
    }

    if (column.sortingOrder === SortingOrder.Default) {
      this.sortedRecords = [...this.originalOrderRecords];
      return;
    }

    if (column.sortingOrder === SortingOrder.Ascendant) {
      this.sortedRecords =
        [...this.originalOrderRecords]
          .sort((recordA, recordB) =>
            column!.compareFunction!(recordA, recordB, true));
      return;
    }

    if (column.sortingOrder === SortingOrder.Descendant) {
      this.sortedRecords =
        [...this.originalOrderRecords]
          .sort((recordA, recordB) =>
            column!.compareFunction!(recordA, recordB, false));
      return;
    }
  }

  private getColumnViews =
    (columns: ColumnDataBase<T>[]): ColumnView[] =>
      columns.map(column => ({
        id: column.id,
        icon: column.icon,
        sortingOrder: column.sortingOrder,
        title: column.title,
        nonSortable: column.nonSortable,
        widthPercentage: column.widthPercentage
      } as ColumnView));
}
