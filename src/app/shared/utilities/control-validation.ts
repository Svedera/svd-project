import { AbstractControl, FormGroup } from '@angular/forms';

import { ValidationError } from '@backend-models/validationError';
import { ControlState } from '@models/controlState';

export const isValid = (control: AbstractControl) =>
  control != null
  && control.valid
  && !control.dirty
  && control.errors == null;

export const mapValidatedResponseKey = (object: object, key: string) => {
  const keyLowered = key.toLowerCase();
  Object.keys(object).find(
    objectKey => objectKey.toLowerCase() === keyLowered
  );
}

export const isControlInvalid = (control: AbstractControl): boolean => {
  const isControlValid = isValid(control);
  return !isControlValid;
}

export const getControlError = (control: AbstractControl): string => {
  if (!control || !control.errors || control?.errors?.length < 0) {
    return '';
  }
  if (control.errors?.pattern) {
    return 'Invalid input pattern';
  }
  if (control.errors?.required) {
    return 'This field is required';
  }
  if (control.errors?.serverValidationError) {
    return control.errors.serverValidationError;
  }
  return 'Field validation failed';
};

export const resetServerErrors = (form: FormGroup) => {
  Object.keys(form.controls).forEach(key => {
    form
      .controls[key]
      .setErrors({ serverValidationError: null });
    form
      .controls[key].updateValueAndValidity();
  });
};

export const inputDecimalPattern =
  (fractionalPartDigitNumber: number): string =>
    `^(-)?([0-9]){1,9}([\.,]([0-9]){1,${fractionalPartDigitNumber}})?`;

export const updateFormState = (
  form: FormGroup,
  formState: { [key: string]: ControlState }) => {

  Object.keys(form.controls).forEach(controlKey => {
    const control = form.controls[controlKey];

    if (control == null) {
      return;
    }

    const isInvalid = isControlInvalid(control);
    const error = getControlError(control);

    formState[controlKey] =
      new ControlState(isInvalid, error);
  });

  form.markAllAsTouched();
  form.markAsPristine();
}

export const parseValidationErrors = (
  errors: ValidationError[],
  form: FormGroup,
  formState: { [key: string]: ControlState }) => {

  errors.forEach(error => {
    const controlKey = error.propertyName;
    const control = form.controls[controlKey];

    if (control == null) {
      return;
    }

    formState[controlKey] =
      new ControlState(true, error.errorMessage);
  });

  form.markAllAsTouched();
  form.markAsPristine();
}
