import { emptyProps, createActionGroup, props } from '@ngrx/store';
import { Grocery } from '../../../models/grocery.model';

export const groceryAction =  createActionGroup({
    source: 'Grocery API',
    events: {
        'Load Grocery': emptyProps(),
        'Load Grocery Success': props<{ payload: Grocery[] }>(),
        'Load Grocery Failure': emptyProps(),
    },
});


