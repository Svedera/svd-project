import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './features/article/article.component';
import {
  ArticleListComponent
} from './features/list/article-list.component';
import {
  DefaultContentComponent
} from './layout/default-content/default-content.component';
import {
  ArticleResolver
} from '@services/resolvers/article-resolver.service';
import {
  ArticleListResolver
} from '@services/resolvers/article-list-resolver.service';
import { AppRouts } from '@enums/appRouts';

const routes: Routes = [{
  path: `${AppRouts.Article}/:id`,
  component: ArticleComponent,
  resolve: {
    article: ArticleResolver
  },
  data: {
    title: 'Article'
  }
},
{
  path: `${AppRouts.Article}`,
  component: ArticleComponent,
  resolve: {
    article: ArticleResolver
  },
  data: {
    title: 'Article'
  }
},
{
  path: `${AppRouts.ArticleList}`,
  component: ArticleListComponent,
  resolve: {
    articleLst: ArticleListResolver
  },
  data: {
    title: 'List'
  }
},
{
  path: '',
  component: DefaultContentComponent,
  pathMatch: 'full',
  data: {
    title: 'Trinidad Wiseman'
  }
},
{
  path: '**',
  component: DefaultContentComponent,
  pathMatch: 'full',
  data: {
    title: 'Trinidad Wiseman'
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
