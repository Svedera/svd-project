import { LogLevel } from '@enums/logLevel';
import {
  ApiConfiguration,
  AppConfiguration,
  ArticleConfiguration,
  RuntimeConfiguration,
  TimeoutConfiguration
} from '@models/appConfiguration';

export interface Configuration {
  /**
   * Configuration values set in `index.html`
   * Boolean values are represented as strings to avoid case sensitivity:
   * `false`, `False`, `true`, `True` should all be accepted.
   * This is done for avoiding issues with environment variables used in both
   * Python (`True`, `False`) and JavaScript (`true`, `false`).
   */
  [k: string]: string | number;
}

export const RuntimeConfig: RuntimeConfiguration = {
  apiBaseUrl: '',
  logLevel: LogLevel.All
}

export const TimeoutConfig: TimeoutConfiguration = {
  requestTimeout: 3000
}

export const ApiConfigSuffix: ApiConfiguration = {
  articleUrl: '/api/list',
  listUrl: '/api/list',
  operationCategory: '/api/operation-category'
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
