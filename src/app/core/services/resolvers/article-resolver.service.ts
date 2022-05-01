import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Article } from '@models/article';
import { ArticleHandler } from '@services/abstract/articleHandler';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ArticleResolver implements Resolve<Article> {
  constructor(private handler: ArticleHandler) { }

  resolve(): Observable<Article> {
    return this.handler.getArticle();
  }
}
