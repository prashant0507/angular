import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UsersAPI } from './users';
import { catchError, map, of } from 'rxjs';
import { User } from '../models/user.interface';

export const userResolver: ResolveFn<User[]> = (route, state) => {
  const userApi = inject(UsersAPI);
  return userApi.all().pipe(
    map((response: User[]) => response),
    catchError(() => of([]))
  );
};
