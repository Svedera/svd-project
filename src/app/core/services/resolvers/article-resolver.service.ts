import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Article } from 'src/app/core/backend-models/article';
import { ArticleHandler } from '@services/abstract/articleHandler';

@Injectable({ providedIn: 'root' })
export class ArticleResolver implements Resolve<Article> {
  constructor(private handler: ArticleHandler) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Article> {
    const id = route.paramMap.get('id');
    return this.handler.getArticle(id);
  }
}
