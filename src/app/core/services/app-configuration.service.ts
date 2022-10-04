import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { RuntimeConfiguration } from '@models/appConfiguration';
import { LogLevel } from '@enums/logLevel';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private config: RuntimeConfiguration = {
    apiBaseUrl: '',
    logLevel: LogLevel.All
  };

  loaded = false;

  constructor(private http: HttpClient) { }

  loadConfig(): Observable<void> {
    return this.http
      .get<RuntimeConfiguration>('/assets/app.config.json')
      .pipe(
        map(data => {
          this.config = data;
          this.loaded = true;
        })
      );
  }

  getConfig(): RuntimeConfiguration {
    return this.config;
  }
}
