export class AppConfiguration {
  timeouts: TimeoutConfiguration;
  apiPaths: ApiPathsConfiguration;

  constructor(
    apiPaths: ApiPathsConfiguration,
    timeouts: TimeoutConfiguration) {
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

export class ApiPathsConfiguration {
  articleUrl: string;
  tableUrl: string;

  constructor(
    articleUrl: string,
    tableUrl: string) {
    this.articleUrl = articleUrl,
      this.tableUrl = tableUrl
  }
}
