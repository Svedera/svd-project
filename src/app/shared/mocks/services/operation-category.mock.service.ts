import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Guid } from 'guid-typescript';
import { Observable, of } from 'rxjs';

import { BaseResponse, ValueResponse } from '@backend-models/baseResponse';
import { ValidatedResponse } from '@backend-models/validatedResponse';
import {
  AppConfiguration,
  RuntimeConfiguration,
  TimeoutConfiguration
} from '@models/appConfiguration';
import { Logging } from '@services/abstract/logging';
import { RepositoryHandler } from '@services/abstract/repositoryHandler';
import { HttpBaseService } from '@services/http-base.service';
import {
  AuditableOperationCategory,
  OperationCategory,
  OperationCategoryRequest
} from '@backend-models/finance/operationCategory';
import {
  getOperationCategoryArrayMock,
  getOperationCategoryByRequestMock,
  getOperationCategoryMock
} from '../operation-category';
import {
  wrapToValidatedResponse,
  wrapToValueResponse
} from '../responses';

@Injectable({
  providedIn: 'root'
})
export class OperationCategoryServiceMock
  extends HttpBaseService
  implements RepositoryHandler
  <AuditableOperationCategory,
    OperationCategory,
    OperationCategoryRequest> {

  readonly apiPath: string = '';

  private elements: AuditableOperationCategory[] = [];

  constructor(
    private httpClient: HttpClient,
    private appConfig: AppConfiguration,
    private runtime: RuntimeConfiguration,
    private timeoutConfig: TimeoutConfiguration,
    private logger: Logging,) {

    super(httpClient, logger, timeoutConfig);
    this.elements = getOperationCategoryArrayMock();
  }

  getById(id: Guid):
    Observable<ValueResponse<AuditableOperationCategory | null>> {

    let value =
      this.elements.find(category =>
        category.operationCategoryId === id) ?? null;

    const success = value != null;

    let message: string | null = null;
    if (!success) {
      message = 'Element not found.'
    };

    var response =
      wrapToValueResponse(success, value, message);

    this.logger.info(`Operation category requested with id: ${id}`)
    this.logger.info(`Response:`);
    this.logger.traceObject(response);
    return of(response);
  }

  getAll(): Observable<ValueResponse<AuditableOperationCategory[] | null>> {
    var response =
      wrapToValueResponse(true, this.elements);

    this.logger.info(`Operation categories requested`);
    this.logger.info(`Response:`);
    this.logger.traceObject(response);
    return of(response);
  }

  add(request: OperationCategoryRequest):
    Observable<ValidatedResponse<AuditableOperationCategory>> {

    var category = getOperationCategoryByRequestMock(request);
    var response =
      wrapToValidatedResponse(category, true);

    this.logger.info(`Operation category add is requested:`);
    this.logger.traceObject(request);
    this.logger.info(`Response:`);
    this.logger.traceObject(response);
    return of(response);
  }

  update(update: OperationCategory):
    Observable<ValidatedResponse<AuditableOperationCategory>> {

    var category = getOperationCategoryMock(update);
    var response =
      wrapToValidatedResponse(category, true);

    return of(response);
  }

  delete(id: Guid):
    Observable<BaseResponse> {

    const base = this.runtime.apiBaseUrl;
    const apiPath = this.apiPath;
    const url = `${base}${apiPath}/${id}`;

    return this.httpDelete(url);
  }
}
