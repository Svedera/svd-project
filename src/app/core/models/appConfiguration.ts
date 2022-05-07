import { LogLevel } from '@enums/logLevel';

export class AppConfiguration {
  defaultArticleId: string;
  logLevel: LogLevel;
  timeouts: TimeoutConfiguration;
  apiPaths: ApiConfiguration;

  constructor(
    defaultArticleId: string,
    logLevel: LogLevel,
    apiPaths: ApiConfiguration,
    timeouts: TimeoutConfiguration) {
    this.defaultArticleId = defaultArticleId;
    this.logLevel = logLevel;
    this.apiPaths = apiPaths;
    this.timeouts = timeouts;
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
    this.articleUrl = articleUrl,
      this.listUrl = listUrl
  }
}
