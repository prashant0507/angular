import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserActions } from '../actions/user.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { User } from '../../features/dashboard/models/user.interface';
import { UsersAPI } from '../../features/dashboard/services/users';

@Injectable()
export class UserEffects {

  private actions$ = inject(Actions);
  private usersAPI = inject(UsersAPI); 

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      exhaustMap(() => this.usersAPI.all()
      .pipe(
        map((users: User[]) => (UserActions.loadUsersSuccess({data: users}))),
        catchError(() => of(UserActions.loadUsersFailure({error: 'somwthing went wrong with users api call'})))
      )
    )
    )
  })

  loadDetailUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadDetalUsers),
      exhaustMap(({id}) => this.usersAPI.byId(id)
      .pipe(
        map((user: User) => (UserActions.loadDetailUsersSuccess({data: user}))),
        catchError(() => of(UserActions.loadDetailUsersFailure({error: 'somwthing went wrong with user detail api call'})))
      )
    )
    )
  })

  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.deleteUser),
      map(({ id }) => UserActions.deleteUserSuccess({ id })),
      catchError(() => of(UserActions.deleteUserFailure({ error: 'somwthing went wrong with user delete api call' })))
    )
  })
}
