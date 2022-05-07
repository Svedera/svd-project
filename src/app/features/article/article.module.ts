import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ArticleComponent } from './article.component';
import { ArticleListComponent } from '../list/article-list.component';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleListComponent
  ],
  exports: [
    ArticleComponent,
    ArticleListComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ArticleModule {
}
