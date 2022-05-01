import { LogLevel } from '@enums/logLevel';

export class AppConfiguration {
  logLevel: LogLevel;
  timeouts: TimeoutConfiguration;
  apiPaths: ApiConfiguration;

  constructor(
    logLevel: LogLevel,
    apiPaths: ApiConfiguration,
    timeouts: TimeoutConfiguration) {
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
  tableUrl: string;

  constructor(
    articleUrl: string,
    tableUrl: string) {
    this.articleUrl = articleUrl,
      this.tableUrl = tableUrl
  }
}
