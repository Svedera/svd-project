import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, timeout } from 'rxjs';

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

    return this.httpGet(url);
  };

  public getArticleList(): Observable<ArticleList> {
    const limit = this.appConfig.defaultListLimit;
    return this.getArticleListWithLimit(limit);
  };

  public getArticleListWithLimit(limit: number): Observable<ArticleList> {
    const url = this.apiPaths.articleUrl;
    let params = new HttpParams().set('limit', limit);

    return this.httpGet(url, params);
  };

  private httpGet<T>(
    url: string,
    params: HttpParams | undefined = undefined): Observable<T> {
    return this.http
      .get<T>(url, { params: params })
      .pipe(
        timeout(this.timeouts.requestTimeout),
        catchError(this.handleError)
      );
  }
}
