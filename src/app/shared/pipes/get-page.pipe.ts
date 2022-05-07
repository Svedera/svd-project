import { Pipe, PipeTransform } from '@angular/core';

import { ColumnDataBase, RowData } from '@models/tableData';

@Pipe({
  name: 'getPage'
})
export class GetPagePipe implements PipeTransform {

  transform<T>(
    records: T[],
    columnData: ColumnDataBase<T>[],
    elementsRange: number[]): RowData<T>[] {

    let rows: RowData<T>[] = [];

    elementsRange.forEach(index => {
      const record = records[index];

      if(record == null){
        return;
      }
      let cells: (string | null)[] = [];
      columnData.forEach((value) => {
        const content = value.getCellContent(record);
        cells.push(content);
      });

      const row = {
        index,
        record,
        cells
      }

      rows.push(row);
    });

    return rows;
  }
}
