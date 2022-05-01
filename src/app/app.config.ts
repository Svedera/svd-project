import {
  ApiPathsConfiguration,
  AppConfiguration,
  TimeoutConfiguration
} from "@models/appConfiguration";

export const TimeoutConfig: TimeoutConfiguration = {
  requestTimeout: 3000
}

export const ApiPaths: ApiPathsConfiguration = {
  articleUrl: '',
  tableUrl: ''
}

export const AppConfig: AppConfiguration = {
  timeouts: TimeoutConfig,
  apiPaths: ApiPaths
}
