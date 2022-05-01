import { Provider } from '@angular/core';

import { AppConfig } from './app.config';
import {
  ApiConfiguration,
  AppConfiguration,
  TimeoutConfiguration
} from '@models/appConfiguration';
import { ArticleHandler } from '@services/abstract/articleHandler';
import { ArticleService } from '@services/article.service';
import { Logging } from '@services/abstract/logging';
import { LoggingService } from '@services/logging.service';

export const AppProviders: Provider[] = [
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
  }
];
