import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderAPI } from '../services/loader-api';
import { catchError, map, throwError } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  LoaderAPI.showLoader();
  return next(req).pipe(
    map(res => {
      LoaderAPI.hideLoader();
      return res;
    }),
    catchError(error => {
      LoaderAPI.hideLoader();
      return throwError(() => error);
    })
  );
};
