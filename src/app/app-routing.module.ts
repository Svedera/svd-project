import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './features/article/article.component';
import {
  ArticleListComponent
} from './features/article/list/article-list.component';
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
import {
  GameOfLifeComponent
} from './features/game-of-life/game-of-life.component';

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
  path: `${AppRouts.GameOfLife}`,
  component: GameOfLifeComponent,
  data: {
    title: 'Game of life'
  }
},
{
  path: '',
  component: DefaultContentComponent,
  pathMatch: 'full',
  data: {
    title: 'Svedera Sandbox'
  }
},
{
  path: '**',
  component: DefaultContentComponent,
  pathMatch: 'full',
  data: {
    title: 'Svedera Sandbox'
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
