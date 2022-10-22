import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import {
  OperationCategory, OperationCategoryRequest
} from '@backend-models/finance/operationCategory';
import { ValidatedResponse } from '@backend-models/validatedResponse';
import { generateRandomHex } from '@shared/utilities/color';
import {
  parseValidationErrors,
  updateFormState
} from '@shared/utilities/control-validation';
import { ControlState } from '@models/controlState';
import {
  OperationCategoryHandler
} from '@services/abstract/operationCategoryHandler';

@Component({
  selector: 'svd-operation-category',
  templateUrl: './operation-category.component.html',
  styleUrls: ['./operation-category.component.css']
})
export class OperationCategoryComponent implements OnInit {
  @Input() operationCategory: OperationCategory | null = null;

  color: string | null = null;
  form: FormGroup;
  formState: { [key: string]: ControlState; };
  errors: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private handler: OperationCategoryHandler) {

    this.form = this.getDefaultForm();
    this.formState = this.getDefaultFormState();
  }

  ngOnInit(): void {
    if (this.operationCategory == null) {
      this.color = generateRandomHex();
      return;
    }

    this.form.controls.name.setValue(this.operationCategory.name);
    this.color = this.operationCategory.color;
  }

  submit() {
    this.errors = [];
    this.formState = this.getDefaultFormState();

    if (!this.color) {
      throw new Error('Operation category color is not set.');
    }

    if (this.form.invalid) {
      this.updateFormState();
      return;
    }

    const name = this.form.controls.name.value;
    const request =
      new OperationCategoryRequest(name, this.color);

    if (this.operationCategory) {
      this.update(request);
      return;
    }

    this.add(request);
  }

  update(request: OperationCategoryRequest) {
    if (this.operationCategory == null) {
      throw new Error('Operation category is not defined.');
    }
    const updatedOperationCategory =
      this.operationCategory.getUpdated(request);

    const responseObserver =
      this.handler.update(updatedOperationCategory);
    responseObserver.subscribe(response => this.parseResponse(response));
  }

  add(request: OperationCategoryRequest) {
    const responseObserver = this.handler.add(request);
    responseObserver.subscribe(response => this.parseResponse(response));
  }

  parseResponse(response: ValidatedResponse<OperationCategory>) {
    if (response.validationResult.isValid) {
      return;
    }

    parseValidationErrors(
      response.validationResult.errors,
      this.form,
      this.formState);
  }

  updateFormState = () =>
    updateFormState(this.form, this.formState);

  getDefaultForm = (): FormGroup => this.formBuilder.group({
    name: [
      null,
      [
        Validators.required,
        Validators.maxLength(60)

      ]]
  });

  getDefaultFormState = (): { [key: string]: ControlState; } => ({
    name: new ControlState()
  });
}
