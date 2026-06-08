import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../features/dashboard/models/user.interface';
import { State } from '../reducers/user.reducer';

export const selectUsersState = createFeatureSelector<State>("user"); // user is define in app.config

export const selectUsers = createSelector(
    selectUsersState,
    (state) => state.list as User[]
)

export const selectUserById = createSelector(
    selectUsersState,
    (state) => state.detail as User
)

// export const selectUserById = (id: number) => createSelector(
//     selectUsers,
//     (state: User[]) => state.filter((user: User) => user.id === id)
// )