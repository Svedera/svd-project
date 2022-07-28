import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  ApiConfiguration,
  AppConfiguration,
  RuntimeConfiguration,
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

  constructor(
    private httpClient: HttpClient,
    private appConfig: AppConfiguration,
    private runtime: RuntimeConfiguration,
    private timeoutConfig: TimeoutConfiguration,
    private apiPaths: ApiConfiguration,
    private logger: Logging) {
    super(httpClient, logger, timeoutConfig);
  }

  public getArticle(id: string | null): Observable<Article> {
    const articleId = id ?? this.appConfig.article.defaultArticleId;

    const base = this.runtime.apiBaseUrl;
    const url = `${base}${this.apiPaths.articleUrl}/${articleId}`;

    return this.httpGet(url);
  };

  public getArticleList(): Observable<ArticleList> {
    const limit = this.appConfig.article.defaultListLimit;
    return this.getArticleListWithLimit(limit);
  };

  public getArticleListWithLimit(limit: number): Observable<ArticleList> {
    const base = this.runtime.apiBaseUrl;
    const url = `${base}${this.apiPaths.articleUrl}`;

    let params = new HttpParams().set('limit', limit);
    return this.httpGet(url, params);
  };
}
