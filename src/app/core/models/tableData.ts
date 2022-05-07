import { Guid } from 'guid-typescript';

import { SortingOrder } from '@enums/sortingType';
import { CompareFunction, GetProperty } from '@shared/utilities/sorting';
import {
  SortingOrderChangeMap,
  SortingOrderIconMap
} from '@shared/utilities/sorting-map';

export interface RowData<T> {
  index: number;
  record: T;
  cells: (string | null)[];
}

export class ColumnView {
  id: Guid;
  icon: string | null;
  sortingOrder: SortingOrder;
  title: string;
  nonSortable: boolean;
  widthPercentage: number | null;

  constructor(id: Guid,
    icon: string | null,
    sortingOrder: SortingOrder,
    title: string,
    nonSortable: boolean,
    widthPercentage: number | null) {
    this.id = id;
    this.icon = icon;
    this.sortingOrder = sortingOrder;
    this.title = title;
    this.nonSortable = nonSortable;
    this.widthPercentage = widthPercentage;

  }
}

export abstract class ColumnDataBase<T> {
  abstract id: Guid;
  abstract icon: string | null;
  abstract sortingOrder: SortingOrder | null;

  abstract title: string;
  abstract nonSortable: boolean;
  abstract widthPercentage: number | null;

  abstract getCellContent: GetProperty<T, string>;
  abstract compareFunction: CompareFunction<T> | null;

  abstract switchSortingOrder(): void;
  abstract setSortingToDefault(): void;

  abstract getView(): ColumnView;
}

export class ColumnData<T> implements ColumnDataBase<T>{
  private _id: Guid;
  private _sortingOrder: SortingOrder;
  private _icon: string | null;

  title: string;
  nonSortable: boolean;
  widthPercentage: number | null;

  getCellContent: GetProperty<T, string>;
  compareFunction: CompareFunction<T> | null;

  public get id(): Guid {
    return this._id;
  }

  icon: string | null;

  public get sortingOrder(): SortingOrder {
    return this._sortingOrder;
  }

  constructor(
    title: string,
    widthPercentage: number | null = null,
    nonSortable: boolean = false,
    getCellContent: GetProperty<T, string>,
    compareFunction: CompareFunction<T> | null = null) {

    this._id = Guid.create();
    this.title = title;
    this.widthPercentage = widthPercentage;
    this.nonSortable = nonSortable;
    this.getCellContent = getCellContent;
    this.compareFunction = compareFunction;

    if (nonSortable) {
      this._sortingOrder = SortingOrder.None;
    } else {
      this._sortingOrder = SortingOrder.Default;
    }
    this._icon = SortingOrderIconMap.get(this._sortingOrder) ?? null;
    this.icon = this._icon;
  }

  switchSortingOrder(): void {
    if (this._sortingOrder === SortingOrder.None) {
      return;
    }

    this._sortingOrder =
      SortingOrderChangeMap.get(this._sortingOrder) || SortingOrder.None;
    this._icon = SortingOrderIconMap.get(this._sortingOrder) || null;
    this.icon = this._icon;
  }

  setSortingToDefault(): void {
    if (this._sortingOrder === SortingOrder.None) {
      return;
    }
    this._sortingOrder = SortingOrder.Default;
    this._icon = SortingOrderIconMap.get(SortingOrder.Default) || null;;
    this.icon = this._icon;
  }

  getView = (): ColumnView => ({
    id: this._id,
    sortingOrder: this._sortingOrder,
    title: this.title,
    icon: this._icon,
    nonSortable: this.nonSortable,
    widthPercentage: this.widthPercentage
  });
}
