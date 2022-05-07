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
  // https://midaiganes.irw.ee/api/list?limit=500
  listUrl: 'http://localhost:8000/list'
}

export const AppConfig: AppConfiguration = {
  defaultArticleId: '972d2b8a',
  logLevel: LogLevel.All,
  timeouts: TimeoutConfig,
  apiPaths: ApiConfig
}
