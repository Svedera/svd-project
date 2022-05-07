import { LogLevel } from '@enums/logLevel';
import {
  ApiConfiguration,
  AppConfiguration,
  TimeoutConfiguration
} from '@models/appConfiguration';

export const TimeoutConfig: TimeoutConfiguration = {
  requestTimeout: 3000
}

export const ApiConfig: ApiConfiguration = {
  articleUrl: 'https://midaiganes.irw.ee/api/list',
  listUrl: 'https://midaiganes.irw.ee/api/list'
}

export const AppConfig: AppConfiguration = {
  defaultArticleId: '972d2b8a',
  defaultListLimit: 500,
  logLevel: LogLevel.All,
  timeouts: TimeoutConfig,
  apiPaths: ApiConfig
}
