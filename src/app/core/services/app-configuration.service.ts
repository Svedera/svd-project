import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RuntimeConfiguration } from '@models/appConfiguration';
import { LogLevel } from '@enums/logLevel';
import { Configuration, RuntimeConfig } from 'src/app/app.config';
import { Logging } from './abstract/logging';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private config: RuntimeConfiguration = {
    apiBaseUrl: '',
    logLevel: LogLevel.All
  };

  loaded = false;

  constructor(private http: HttpClient, private logger: Logging) { }

  loadConfig(): RuntimeConfiguration {
    const htmlConfiguration: Configuration =
      window['app-config' as keyof Window];
    const runTimeConfig = this.merge(RuntimeConfig, htmlConfiguration);
    return runTimeConfig;
  }

  getConfig(): RuntimeConfiguration {
    return this.config;
  }

  private merge =
    (dest: RuntimeConfiguration, src: Configuration): RuntimeConfiguration =>
      Object.entries(dest)
        .reduce((accumulated, [key, _]) => {
          const isKeyValid = src?.hasOwnProperty(key)
            && src[key] !== ''
            && src[key] != null;
          if (isKeyValid) {
            try {
              accumulated[key as keyof Object] =
                JSON.parse(String(src[key]));
            } catch (e) {
              this.logger.error(`Could not parse value with key: ${key}`);
            }
          }
          return accumulated;
        }, { ...dest });
}
