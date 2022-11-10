/* eslint-disable no-console */
import { Logging } from '@services/abstract/logging';

export class LoggingMock implements Logging {
  traceObject(message: unknown): void {
    console.trace(message);
  }
  trace(message: string): void {
    console.trace(message);
  }
  debug(message: string): void {
    console.debug(message);
  }
  info(message: string): void {
    console.info(message);
  }
  warn(message: string): void {
    console.warn(message);
  }
  error(message: string, error?: Error | undefined): void {
    console.error(message);
  }
  fatal(message: string, error?: Error | undefined): void {
    console.error(message);
  }

}
