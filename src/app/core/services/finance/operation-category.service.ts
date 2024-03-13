import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  AuditableOperationCategory,
  OperationCategory,
  OperationCategoryRequest
} from '@backend-models/finance/operationCategory';
import {
  ApiConfiguration,
  AppConfiguration,
  RuntimeConfiguration,
  TimeoutConfiguration
} from '@models/appConfiguration';
import { Logging } from '@services/abstract/logging';
import {
  OperationCategoryHandler
} from '@services/abstract/operationCategoryHandler';
import { RepositoryService } from '@services/repository.service';

@Injectable({
  providedIn: 'root'
})
export class OperationCategoryService
  extends RepositoryService
  <AuditableOperationCategory,
    OperationCategory,
    OperationCategoryRequest>

  implements OperationCategoryHandler {

  apiPath: string = this.apiConfiguration.operationCategory;

  constructor(
    httpClient: HttpClient,
    appConfig: AppConfiguration,
    runtime: RuntimeConfiguration,
    timeoutConfig: TimeoutConfiguration,
    apiPaths: ApiConfiguration,
    logger: Logging,
    private apiConfiguration: ApiConfiguration) {

    super(httpClient, appConfig, runtime, timeoutConfig, logger);
  }
}
