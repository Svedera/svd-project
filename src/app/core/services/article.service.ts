import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, tap, timeout } from 'rxjs';

import {
  ApiConfiguration,
  TimeoutConfiguration
} from '@models/appConfiguration';
import { Article } from '@models/article';
import { ArticleHandler } from '@services/abstract/articleHandler';
import { Logging } from './abstract/logging';
import { HttpBaseService } from './http-base.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends HttpBaseService implements ArticleHandler {

  constructor(private http: HttpClient,
    private timeouts: TimeoutConfiguration,
    private apiPaths: ApiConfiguration,
    private logger: Logging) {
    super(logger);
  }

  public getArticle(): Observable<Article> {
    return this.http
      .get<Article>(this.apiPaths.articleUrl)
      .pipe(
        tap(article => article && this.logger.traceObject(article)),
        timeout(this.timeouts.requestTimeout),
        catchError(this.handleError)
      );
  };
}
