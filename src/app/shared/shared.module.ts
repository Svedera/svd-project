import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxFontAwesomeModule } from 'ngx-font-awesome';

import { ImageComponent } from './image/image.component';
import { ChipComponent } from './chip/chip.component';
import { UrlAsBackgroundImagePipe } from './pipes/url-as-background-image.pipe';
import { RemoveEmptyEntriesPipe } from './pipes/remove-empty-entries.pipe';
import { TableComponent } from './table/table.component';
import { PagingComponent } from './paging/paging.component';
import { GetPagePipe } from './pipes/get-page.pipe';
import { TableRowComponent } from './table-row/table-row.component';
import { FirstParagraphPipe } from './pipes/text-fragment.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UrlAsBackgroundImagePipe,
    RemoveEmptyEntriesPipe,
    FirstParagraphPipe,
    GetPagePipe,

    ImageComponent,
    ChipComponent,
    TableComponent,
    PagingComponent,
    TableRowComponent
  ],
  imports: [
    CommonModule,
    NgxFontAwesomeModule,
    RouterModule
  ],
  exports: [
    CommonModule,

    NgxFontAwesomeModule,

    ImageComponent,
    ChipComponent,
    TableComponent,
    TableRowComponent,

    UrlAsBackgroundImagePipe,
    RemoveEmptyEntriesPipe,
    FirstParagraphPipe,
    RouterModule
  ]
})
export class SharedModule {
}
