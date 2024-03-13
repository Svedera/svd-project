import { APP_INITIALIZER, Provider } from '@angular/core';

import { AppConfig } from './app.config';
import {
  ApiConfiguration,
  AppConfiguration,
  RuntimeConfiguration,
  TimeoutConfiguration
} from 'src/app/core/models/appConfiguration';
import { ArticleHandler } from '@services/abstract/articleHandler';
import { ArticleService } from '@services/article/article.service';
import { Logging } from '@services/abstract/logging';
import { LoggingService } from '@services/logging.service';
import { LayoutService } from '@services/layout.service';
import { ConfigurationService } from '@services/app-configuration.service';
import {
  OperationCategoryService
} from '@services/finance/operation-category.service';
import {
  OperationCategoryHandler
} from '@services/abstract/operationCategoryHandler';
import {
  OperationCategoryServiceMock
} from '@shared/mocks/services/operation-category.mock.service';

export const debug = true;

export const initConfig =
  (appConfig: ConfigurationService): RuntimeConfiguration =>
    appConfig.loadConfig();

export const getOperationCategoryProvider = (): Provider => {
  if (debug) {
    return {
      provide: OperationCategoryHandler,
      useClass: OperationCategoryServiceMock
    };
  }

  return {
    provide: OperationCategoryHandler,
    useClass: OperationCategoryService
  };
};

export function appInitializerProvider(service: ConfigurationService) {
  return () => initConfig(service);
}

const runtimeConfigInitializerProvider =
  (service: ConfigurationService) =>
    service.getConfig()

export const AppProviders: Provider[] = [
  {
    provide: APP_INITIALIZER,
    useFactory: (service: ConfigurationService) =>
      appInitializerProvider(service),
    deps: [ConfigurationService],
    multi: true,
  },
  {
    provide: RuntimeConfiguration,
    deps: [ConfigurationService],
    useFactory: runtimeConfigInitializerProvider
  },
  {
    provide: AppConfiguration, useValue: AppConfig
  },
  {
    provide: TimeoutConfiguration, useValue: AppConfig.timeouts
  },
  {
    provide: ApiConfiguration, useValue: AppConfig.apiPaths
  },
  {
    provide: ArticleHandler, useClass: ArticleService
  },

  getOperationCategoryProvider(),

  {
    provide: Logging, useClass: LoggingService
  },
  LayoutService
];

