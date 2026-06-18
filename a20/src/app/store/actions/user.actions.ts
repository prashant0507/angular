import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../../features/dashboard/models/user.interface';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load Users': emptyProps(),
    'Load Users Success': props<{ data: User[] }>(),
    'Load Users Failure': props<{ error: string }>(),

    'Load Detal Users': props<{ id: number }>(),
    'Load Detail Users Success': props<{ data: User }>(),
    'Load Detail Users Failure': props<{ error: string }>(),

    'Delete User': props<{ id: number }>(),
    'Delete User Success': props<{ id: number }>(),
    'Delete User Failure': props<{ error: string }>(),
  }
});
