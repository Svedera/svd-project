import { ValidationError } from './validationError';

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export interface ValidatedResponse<T> {
  value: T | null;
  validationResult: ValidationResult;
}
