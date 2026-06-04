import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../features/dashboard/models/user.interface';

export const selectUsers = createFeatureSelector<User[]>("user");

export const selectUserById = (id: number) => createSelector(
    selectUsers,
    (state: User[]) => state.filter((user: User) => user.id === id)
)