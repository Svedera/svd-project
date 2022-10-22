import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

import { BaseResponse, ValueResponse } from '@backend-models/baseResponse';
import { ValidatedResponse } from '@backend-models/validatedResponse';

export abstract class RepositoryHandler<T, P> {
  abstract getById(id: Guid): Observable<ValueResponse<T>>;
  abstract getAll(): Observable<ValueResponse<T[]>>;
  abstract add(requests: P): Observable<ValidatedResponse<T>>;
  abstract update(requests: T): Observable<ValidatedResponse<T>>;
  abstract delete(id: Guid): Observable<BaseResponse>;
}
