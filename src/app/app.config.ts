import { LogLevel } from '@enums/logLevel';
import {
  ApiConfiguration,
  AppConfiguration,
  ArticleConfiguration,
  RuntimeConfiguration,
  TimeoutConfiguration
} from '@models/appConfiguration';

export const RuntimeConfig: RuntimeConfiguration = {
  apiBaseUrl: '',
  logLevel: LogLevel.All
}

export const TimeoutConfig: TimeoutConfiguration = {
  requestTimeout: 3000
}

export const ApiConfigSuffix: ApiConfiguration = {
  articleUrl: '/api/list',
  listUrl: '/api/list'
}

export const ArticleConfig: ArticleConfiguration = {
  defaultArticleId: '972d2b8a',
  defaultListLimit: 500
}

export const AppConfig: AppConfiguration = {
  timeouts: TimeoutConfig,
  apiPaths: ApiConfigSuffix,
  article: ArticleConfig
}
