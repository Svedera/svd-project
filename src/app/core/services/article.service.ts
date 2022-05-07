import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, tap, timeout } from 'rxjs';

import {
  ApiConfiguration,
  AppConfiguration,
  TimeoutConfiguration
} from 'src/app/core/models/appConfiguration';
import { Article } from 'src/app/core/backend-models/article';
import { ArticleHandler } from '@services/abstract/articleHandler';
import { Logging } from './abstract/logging';
import { HttpBaseService } from './http-base.service';
import { ArticleList } from 'src/app/core/backend-models/articleList';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends HttpBaseService implements ArticleHandler {

  constructor(private http: HttpClient,
    private appConfig: AppConfiguration,
    private timeouts: TimeoutConfiguration,
    private apiPaths: ApiConfiguration,
    private logger: Logging) {
    super(logger);
  }

  public getArticle(id: string | null): Observable<Article> {
    const param = id ?? this.appConfig.defaultArticleId;
    const url = `${this.apiPaths.articleUrl}/${param}`;
    return this.http
      .get<Article>(url)
      .pipe(
        tap(article => article && this.logger.traceObject(article)),
        timeout(this.timeouts.requestTimeout),
        catchError(this.handleError)
      );
  };

  public getArticleList(): Observable<ArticleList> {
    return this.http
      .get<ArticleList>(this.apiPaths.listUrl)
      .pipe(
        tap(list => list &&
          this.logger.trace(`Got list, count: ${list.stats.result}`)),
        timeout(this.timeouts.requestTimeout),
        catchError(this.handleError)
      );
  };
}
