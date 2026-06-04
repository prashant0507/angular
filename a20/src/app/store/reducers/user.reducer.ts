import { createReducer, on } from '@ngrx/store';
import { UserActions } from '../actions/user.actions';
import { User } from '../../features/dashboard/models/user.interface';

export const userFeatureKey = 'user';

export interface State {

}

export const initialState: User[] = [];

export const userReducer = createReducer(
  initialState,

  on(UserActions.loadUsersSuccess, (state: User[], action: any) => {
    console.log('reducers state', state),
    console.log('reducers action', action)
    return action.data;
  }),

  on(UserActions.loadUsersFailure, (state: User[], action: any) => {
    return [];
  })
);

