import { createReducer, on } from '@ngrx/store';
import { UserActions } from '../actions/user.actions';
import { User } from '../../features/dashboard/models/user.interface';

export const userFeatureKey = 'user';

export interface State {
  list: User[],
  detail: User | null
}

export const initialState: State = {
  list: [],
  detail: null,
};

export const userReducer = createReducer(
  initialState,

  on(UserActions.loadUsersSuccess, (state: State, action: { data: User[] }) => {
    return {
      ...state,
      list: action.data
    } as State;
  }),

  on(UserActions.loadDetailUsersSuccess, (state: State, action: { data: User }) => {
    return {
      ...state,
      detail: action.data
    } as State;
  }),

  on(UserActions.loadUsersFailure, (state: State, action: any) => {
    return {
      ...state,
      list: []
    } as State;
  })
);

