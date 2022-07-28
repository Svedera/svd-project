import { Injectable } from '@angular/core';
import { LogLevel } from '@enums/logLevel';
import { RuntimeConfiguration } from 'src/app/core/models/appConfiguration';

import { Logging } from './abstract/logging';

@Injectable({
  providedIn: 'root'
})
export class LoggingService implements Logging {

  constructor(private configuration: RuntimeConfiguration) { }

  trace = (message: string) => this.log(message, LogLevel.Trace);
  debug = (message: string) => this.log(message, LogLevel.Debug);
  info = (message: string) => this.log(message, LogLevel.Information);
  warn = (message: string) => this.log(message, LogLevel.Warning);
  error = (message: string, error?: Error) =>
    this.log(message, LogLevel.Error, error);
  fatal = (message: string, error?: Error) =>
    this.log(message, LogLevel.Fatal, error);

  traceObject = (value: unknown) => this.logTrace(value);

  private log(message: string, level: LogLevel, error?: Error) {
    if (level < this.configuration.logLevel) {
      return;
    }
    this.logToConsole(message, level, error);
  }

  private logTrace(value: unknown) {
    if (LogLevel.Trace < this.configuration.logLevel) {
      return;
    }
    // eslint-disable-next-line no-console
    console.trace(value);
  }

  private logToConsole = (message: string, level: LogLevel, error?: Error) => {
    if (level < this.configuration.logLevel || level === LogLevel.Off) {
      return;
    }

    switch (level) {
      /* eslint-disable no-console */
      case LogLevel.Trace: return console.trace(message);
      case LogLevel.Debug: return console.debug(message);
      case LogLevel.Information: return console.info(message);
      case LogLevel.Warning: return console.warn(message);
      case LogLevel.Error:
      case LogLevel.Fatal:
        console.error(message);
        if (error) {
          console.error(error);
        }
        return;
      default: return console.log(message);
      /* eslint-enable no-console */
    }
  };
}
