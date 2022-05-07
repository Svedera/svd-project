import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PagingView } from '@models/pagingData';

@Component({
  selector: 'svd-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent {
  @Input() view: PagingView | null = null;
  @Output() shiftPage = new EventEmitter<number>();
}
