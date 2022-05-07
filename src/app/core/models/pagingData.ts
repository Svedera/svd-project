export class PagingView {
  pageIndex: number;
  pagingRange: number[];
  elementsRange: number[];
  leftShiftDisabled: boolean;
  rightShiftDisabled: boolean;

  constructor(
    pageIndex: number,
    pagingRange: number[],
    elementsRange: number[],
    leftShiftDisabled: boolean,
    rightShiftDisabled: boolean) {

    this.pageIndex = pageIndex;
    this.pagingRange = pagingRange;
    this.elementsRange = elementsRange;
    this.leftShiftDisabled = leftShiftDisabled;
    this.rightShiftDisabled = rightShiftDisabled;
  }
}

export abstract class PagingBase {
  abstract get pagingView(): PagingView;
  abstract shiftPage: (shift: number) => void;
}

export class Paging implements PagingBase {
  private _pageIndex: number = 1;
  private _totalPages: number;

  private _pageBarOffset: number;
  private _elementsPerPage: number;

  private _pagingRange: number[];
  private _elementsRange: number[];

  private _leftShiftDisabled: boolean;
  private _rightShiftDisabled: boolean;


  get pagingView(): PagingView {
    return ({
      pageIndex: this._pageIndex,
      pagingRange: this._pagingRange,
      elementsRange: this._elementsRange,
      leftShiftDisabled: this._leftShiftDisabled,
      rightShiftDisabled: this._rightShiftDisabled
    })
  }

  constructor(
    totalElements: number,
    elementsPerPage: number,
    pageBarOffset: number) {

    if (totalElements == null) {
      throw new Error('Total elements cannot be null.');
    }
    if (elementsPerPage === 0) {
      throw new Error('Elements per page cannot be null.');
    }
    if (pageBarOffset == null) {
      throw new Error('Page bar offset cannot be null.');
    }

    this._elementsPerPage = elementsPerPage;
    this._pageBarOffset = pageBarOffset;

    this._totalPages = Math.ceil(totalElements / elementsPerPage);

    this._pagingRange =
      Paging.getPagingRange(
        this._pageIndex,
        this._pageBarOffset,
        this._totalPages
      );
    this._elementsRange =
      Paging.getElementsRange(this._pageIndex, elementsPerPage);

    this._leftShiftDisabled =
      Paging.isLeftShiftDisabled(this._pagingRange);
    this._rightShiftDisabled =
      Paging.isRightShiftDisabled(this._pagingRange, this._totalPages);
  }

  shiftPage(shift: number) {
    if (shift === 0) {
      return;
    }

    const index = this._pageIndex + shift;
    if (index < 0 || index > this._totalPages) {
      throw new Error('Invalid page index.');
    }

    this._pageIndex = index;
    this._pagingRange =
      Paging.getPagingRange(
        this._pageIndex,
        this._pageBarOffset,
        this._totalPages
      );
    this._elementsRange =
      Paging.getElementsRange(this._pageIndex, this._elementsPerPage);

    this._leftShiftDisabled =
      Paging.isLeftShiftDisabled(this._pagingRange);
    this._rightShiftDisabled =
      Paging.isRightShiftDisabled(this._pagingRange, this._totalPages);
  }

  private static isRightShiftDisabled = (
    pagingRange: number[],
    totalPages: number) =>
    pagingRange.length > 0
    && pagingRange[pagingRange.length - 1] === totalPages;;

  private static isLeftShiftDisabled = (pagingRange: number[]) =>
    pagingRange.length > 0 && pagingRange[0] === 1;

  private static getPagingRange = (
    pageIndex: number,
    pageBarOffset: number,
    totalPages: number
  ): number[] => {

    const pagingRange = 1 + pageBarOffset * 2;

    if (pagingRange >= totalPages) {
      return this.fillNumberArray(1, totalPages);
    }

    const leftBorder = pageIndex - pageBarOffset;
    if (leftBorder <= 0) {
      const minimizedLeftOffset = pageBarOffset - (0 - leftBorder + 1);
      const pagingStart = pageIndex - minimizedLeftOffset;
      return this.fillNumberArray(pagingStart, pagingRange);
    }

    const rightBorder = pageIndex + pageBarOffset;
    if (rightBorder > totalPages) {
      const leftAddUp = rightBorder - totalPages;
      const pagingStart = pageIndex - pageBarOffset - leftAddUp;
      return this.fillNumberArray(pagingStart, pagingRange);
    }

    return this.fillNumberArray(leftBorder, pagingRange);
  }

  private static getElementsRange = (
    pageIndex: number,
    elementsPerPage: number
  ): number[] => {

    const startIndex = (pageIndex - 1) * elementsPerPage
    const indexRange = Paging.fillNumberArray(startIndex, elementsPerPage);

    return indexRange;
  }

  private static fillNumberArray = (start: number, length: number) =>
    [...Array(length)].map((_, i) => start + i);
}
