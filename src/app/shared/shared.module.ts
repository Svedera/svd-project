import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxFontAwesomeModule } from 'ngx-font-awesome';

import { ImageComponent } from './image/image.component';
import { ChipComponent } from './chip/chip.component';
import { UrlAsBackgroundImagePipe } from './pipes/url-as-background-image.pipe';
import { RemoveEmptyEntriesPipe } from './pipes/remove-empty-entries.pipe';

@NgModule({
  declarations: [
    ImageComponent,
    ChipComponent,
    UrlAsBackgroundImagePipe,
    RemoveEmptyEntriesPipe
  ],
  imports: [
    CommonModule,

    NgxFontAwesomeModule
  ],
  exports: [
    CommonModule,

    NgxFontAwesomeModule,

    ImageComponent,
    ChipComponent,
    UrlAsBackgroundImagePipe,
    RemoveEmptyEntriesPipe]
})
export class SharedModule {
}
