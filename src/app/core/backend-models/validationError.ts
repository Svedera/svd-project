export class ValidationError {
  propertyName: string;
  errorMessage: string | null;
  attemptedValue: number;

  constructor(
    propertyName: string,
    errorMessage: string,
    attemptedValue: number) {

    this.propertyName = propertyName;
    this.errorMessage = errorMessage;
    this.attemptedValue = attemptedValue;
  }
}
