import { LogLevel } from '@enums/logLevel';

export class RuntimeConfiguration {
  apiBaseUrl: string;
  logLevel: LogLevel;

  constructor(
    apiBaseUrl: string,
    logLevel: LogLevel) {

    this.apiBaseUrl = apiBaseUrl;
    this.logLevel = logLevel;
  }
}

export class AppConfiguration {
  timeouts: TimeoutConfiguration;
  apiPaths: ApiConfiguration;
  article: ArticleConfiguration;

  constructor(
    article: ArticleConfiguration,
    apiPaths: ApiConfiguration,
    timeouts: TimeoutConfiguration) {
    this.article = article;
    this.apiPaths = apiPaths;
    this.timeouts = timeouts;
  }
}

export class ArticleConfiguration {
  defaultArticleId: string;
  defaultListLimit: number;

  constructor(
    defaultArticleId: string,
    defaultListLimit: number) {
    this.defaultArticleId = defaultArticleId;
    this.defaultListLimit = defaultListLimit;
  }
}

export class TimeoutConfiguration {
  requestTimeout: number;

  constructor(
    requestTimeout: number) {
    this.requestTimeout = requestTimeout;
  }
}

export class ApiConfiguration {
  articleUrl: string;
  listUrl: string;
  operationCategory: string;

  constructor(
    articleUrl: string,
    listUrl: string,
    operationCategory: string) {

    this.articleUrl = articleUrl;
    this.listUrl = listUrl;
    this.operationCategory = operationCategory;
  }
}
