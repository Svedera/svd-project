import { LogLevel } from '@enums/logLevel';
import {
  ApiConfiguration,
  AppConfiguration,
  ArticleConfiguration,
  Configuration,
  RuntimeConfiguration,
  TimeoutConfiguration
} from '@models/appConfiguration';

export const RuntimeConfig: RuntimeConfiguration = {
  baseUrl: '',
  logLevel: LogLevel.All
}

export const TimeoutConfig: TimeoutConfiguration = {
  requestTimeout: 3000
}

export const ApiConfigSuffix: ApiConfiguration = {
  articleUrl: '/api/list',
  listUrl: '/api/list'
}

export const DefaultApiConfig: ApiConfiguration = {
  articleUrl: '',
  listUrl: ''
}

export const ArticleConfig: ArticleConfiguration = {
  defaultArticleId: '972d2b8a',
  defaultListLimit: 500
}

export const AppConfig: AppConfiguration = {
  runtime: RuntimeConfig,
  timeouts: TimeoutConfig,
  apiPaths: DefaultApiConfig,
  article: ArticleConfig
}

const merge =
  (dest: Configuration,
    source: Configuration): Configuration => Object
      .entries(dest)
      .reduce((acc, [key, _]) => {
        const isKeyValid = source?.hasOwnProperty(key)
          && source[key] !== ''
          && source[key] != null;
        if (isKeyValid) {
          try {
            acc[key] = JSON.parse(String(source[key]))
          } catch (e) {
            acc[key] = source[key]
          }
        }
        return acc;
      }, { ...dest });


const htmlConfiguration: Configuration = window['app-config'];
let runTimeConfig = merge(RuntimeConfig, htmlConfiguration);

const { baseUrl } = runTimeConfig;
const apiUrl = `${window.location.origin}/${baseUrl}/api`;

export const ApiConfig: ApiConfiguration = {
  articleUrl: 'https://midaiganes.irw.ee/api/list',
  listUrl: 'https://midaiganes.irw.ee/api/list'
}
