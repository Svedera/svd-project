import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './features/article/article.component';
import { ListComponent } from './features/list/list.component';
import {
  DefaultContentComponent
} from './layout/default-content/default-content.component';

const routes: Routes = [{
  path: 'article',
  component: ArticleComponent,
  data: {
    title: 'Article'
  }
},
{
  path: 'list',
  component: ListComponent,
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
