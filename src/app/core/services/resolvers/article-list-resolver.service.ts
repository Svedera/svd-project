import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { ArticleList } from 'src/app/core/backend-models/articleList';
import { ArticleHandler } from '@services/abstract/articleHandler';

@Injectable({ providedIn: 'root' })
export class ArticleListResolver implements Resolve<ArticleList> {
  constructor(private handler: ArticleHandler) { }

  resolve(): Observable<ArticleList> {
    return this.handler.getArticleList();
  }
}
