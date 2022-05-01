import { Provider } from "@angular/core";

import { AppConfig } from "./app.config";
import {
  ApiPathsConfiguration,
  AppConfiguration,
  TimeoutConfiguration
} from "@models/appConfiguration";

export const providers: Provider[] = [
  {
    provide: AppConfiguration, useValue: AppConfig
  },
  {
    provide: TimeoutConfiguration, useValue: AppConfig.timeouts
  },
  {
    provide: ApiPathsConfiguration, useValue: AppConfig.apiPaths
  }
];
