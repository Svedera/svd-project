import { LogLevel } from '@enums/logLevel';

export interface Configuration {
  /**
   * Configuration values set in `index.html`
   * Boolean values are represented as strings to avoid case sensitivity:
   * `false`, `False`, `true`, `True` should all be accepted.
   */
  [k: string]: string | number;
}

export class RuntimeConfiguration implements Configuration {
  baseUrl: string;
  logLevel: LogLevel;

  constructor(
    baseUrl: string,
    logLevel: LogLevel) {

    this.baseUrl = baseUrl;
    this.logLevel = logLevel;
  }
}

export class AppConfiguration {
  runtime: RuntimeConfiguration;
  timeouts: TimeoutConfiguration;
  apiPaths: ApiConfiguration;
  article: ArticleConfiguration;

  constructor(
    article: ArticleConfiguration,
    runtime: RuntimeConfiguration,
    apiPaths: ApiConfiguration,
    timeouts: TimeoutConfiguration) {
    this.article = article;
    this.runtime = runtime;
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

  constructor(
    articleUrl: string,
    listUrl: string) {
    this.articleUrl = articleUrl;
    this.listUrl = listUrl;
  }
}
