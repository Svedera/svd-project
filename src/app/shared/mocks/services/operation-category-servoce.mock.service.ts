import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export abstract class OperationCategoryServiceMock<T, R>
  extends HttpBaseService
  implements RepositoryHandler<T, R> {
  abstract readonly apiPath: string;

  private

  constructor(
    private httpClient: HttpClient,
    private appConfig: AppConfiguration,
    private runtime: RuntimeConfiguration,
    private timeoutConfig: TimeoutConfiguration,
    private logger: Logging,) {
    super(httpClient, logger, timeoutConfig);
  }

  getById(id: Guid): Observable<ValueResponse<T>> {
    const base = this.runtime.apiBaseUrl;
    const url = `${base}${this.apiPath}/${id}`;

    return this.httpGet(url);
  }

  getAll(): Observable<ValueResponse<T[]>> {
    const base = this.runtime.apiBaseUrl;
    const url = `${base}${this.apiPath}`;

    return this.httpGet(url);
  }

  add(request: R):
    Observable<ValidatedResponse<T>> {

    const base = this.runtime.apiBaseUrl;
    const url = `${base}${this.apiPath}`;

    return this.httpPost(url, request);
  }

  update(request: T):
    Observable<ValidatedResponse<T>> {

    const base = this.runtime.apiBaseUrl;
    const apiPath = this.apiPath;
    const url = `${base}${apiPath}}`;

    return this.httpPut(url, request);
  }

  delete(id: Guid):
    Observable<BaseResponse> {

    const base = this.runtime.apiBaseUrl;
    const apiPath = this.apiPath;
    const url = `${base}${apiPath}/${id}`;

    return this.httpDelete(url);
  }

}
