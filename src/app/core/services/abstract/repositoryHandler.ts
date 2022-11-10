import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';

import { BaseResponse, ValueResponse } from '@backend-models/baseResponse';
import { ValidatedResponse } from '@backend-models/validatedResponse';

export abstract class RepositoryHandler<T, P, R> {
  abstract getById(id: Guid): Observable<ValueResponse<T | null>>;
  abstract getAll(): Observable<ValueResponse<T[] | null>>;
  abstract add(request: R): Observable<ValidatedResponse<T>>;
  abstract update(update: P): Observable<ValidatedResponse<T>>;
  abstract delete(id: Guid): Observable<BaseResponse>;
}
