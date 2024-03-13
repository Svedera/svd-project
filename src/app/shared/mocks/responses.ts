import { ValueResponse } from '@backend-models/baseResponse';
import { ValidatedResponse } from '@backend-models/validatedResponse';
import { ValidationError } from '@backend-models/validationError';

export const wrapToValueResponse = <T>(
  success: boolean,
  value: T,
  message: string | null = null
): ValueResponse<T> => ({
  success,
  message,
  value
});

export const wrapToValidatedResponse = <T>(
  value: T,
  isValid: boolean,
  errors: ValidationError[] = []
): ValidatedResponse<T> => ({
  value,
  validationResult: {
    isValid,
    errors
  }
});
