import { Injectable } from '@angular/core';

import { RuntimeConfiguration } from '@models/appConfiguration';
import { LogLevel } from '@enums/logLevel';
import { Configuration, RuntimeConfig } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private config: RuntimeConfiguration = {
    apiBaseUrl: '',
    logLevel: LogLevel.All
  };

  loaded = false;

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
              // eslint-disable-next-line no-console
              console.error(`Could not parse value with key: ${key}`);
            }
          }
          return accumulated;
        }, { ...dest });
}
