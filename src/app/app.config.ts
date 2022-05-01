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
  articleUrl: 'http://localhost:3000/article',
  tableUrl: 'http://localhost:3000/table'
}

export const AppConfig: AppConfiguration = {
  logLevel: LogLevel.All,
  timeouts: TimeoutConfig,
  apiPaths: ApiConfig
}
