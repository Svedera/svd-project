import { HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';

import { Logging } from './abstract/logging';

export class HttpBaseService {

  constructor(private logging: Logging) {}

  protected handleError = (error: HttpErrorResponse) => {
    if (error != null) {
      this.logging.error(error.message, error);
    }

    // Return an observable with a user-facing error message.
    return throwError(() =>
      new Error('Something bad happened; please try again later.'));
  }
}
