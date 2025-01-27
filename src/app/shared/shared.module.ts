import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxFontAwesomeModule } from 'ngx-font-awesome';
import { NgxColorsModule } from 'ngx-colors';

import { ImageComponent } from './components/image/image.component';
import { ChipComponent } from './components/chip/chip.component';
import { UrlAsBackgroundImagePipe } from './pipes/url-as-background-image.pipe';
import { RemoveEmptyEntriesPipe } from './pipes/remove-empty-entries.pipe';
import { TableComponent } from './components/table/table.component';
import { PagingComponent } from './paging/paging.component';
import { GetPagePipe } from './pipes/get-page.pipe';
import { FirstParagraphPipe } from './pipes/text-fragment.pipe';
import {
  RemoteStateWrapperComponent
} from './remote-state-wrapper/remote-state-wrapper.component';
import {
  AccordionMenuComponent
} from './components/accordion/accordion-menu.component';
import { NullOrEmptyArrayPipe } from './pipes/null-or-empty-array.pipe';

@NgModule({
  declarations: [
    UrlAsBackgroundImagePipe,
    RemoveEmptyEntriesPipe,
    FirstParagraphPipe,
    GetPagePipe,

    RemoteStateWrapperComponent,
    ImageComponent,
    ChipComponent,
    TableComponent,
    PagingComponent,
    AccordionMenuComponent,
    NullOrEmptyArrayPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    NgxColorsModule,
    NgxFontAwesomeModule
  ],
  exports: [
    CommonModule,

    NgxColorsModule,
    NgxFontAwesomeModule,

    ImageComponent,
    ChipComponent,
    TableComponent,
    AccordionMenuComponent,

    RemoteStateWrapperComponent,
    UrlAsBackgroundImagePipe,
    RemoveEmptyEntriesPipe,
    FirstParagraphPipe,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule {
}
