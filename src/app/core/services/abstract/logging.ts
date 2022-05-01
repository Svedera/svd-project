export abstract class Logging {
  abstract traceObject(message: unknown): void;
  abstract trace(message: string): void;
  abstract debug(message: string): void;
  abstract info(message: string): void;
  abstract warn(message: string): void;
  abstract error(message: string, error?: Error): void;
  abstract fatal(message: string, error?: Error): void;
}
