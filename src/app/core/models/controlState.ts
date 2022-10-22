export class ControlState {
  isInvalid: boolean;
  error: string | null;

  constructor(
    isInvalid: boolean = false,
    error: string | null = null
  ) {
    this.isInvalid = isInvalid;
    this.error = error;
  }
}
