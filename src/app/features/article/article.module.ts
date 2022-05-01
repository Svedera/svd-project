import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  exports: [
    ArticleComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ArticleModule {
}
