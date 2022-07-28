import { APP_INITIALIZER, Provider } from '@angular/core';

import { AppConfig } from './app.config';
import {
  ApiConfiguration,
  AppConfiguration,
  RuntimeConfiguration,
  TimeoutConfiguration
} from 'src/app/core/models/appConfiguration';
import { ArticleHandler } from '@services/abstract/articleHandler';
import { ArticleService } from '@services/article.service';
import { Logging } from '@services/abstract/logging';
import { LoggingService } from '@services/logging.service';
import { LayoutService } from '@services/layout.service';
import { RuntimeConfigService } from '@services/app-configuration.service';

export const initConfig = (appConfig: RuntimeConfigService) => {
  return () => appConfig.loadConfig();
}

export const AppProviders: Provider[] = [
  {
    provide: APP_INITIALIZER,
    useFactory: initConfig,
    deps: [RuntimeConfigService],
    multi: true,
  },
  {
    provide: RuntimeConfiguration,
    deps: [RuntimeConfigService],
    useFactory: (service: RuntimeConfigService) =>
      service.getConfig()
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
  {
    provide: Logging, useClass: LoggingService
  },
  LayoutService
];
