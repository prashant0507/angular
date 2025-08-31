import { Grocery } from "../../../models/grocery.model";
import {createReducer, on} from '@ngrx/store';
import { groceryAction } from "../actions/grocery.action";

// const initialState:Grocery[] = [
//     { "id": 1, "name": "Milk", "type": "fruit" },
//     { "id": 2, "name": "Banana", "type": "fruit" },
//     { "id": 3, "name": "lays chips", "type": "snacks" },
//     { "id": 4, "name": "doritos", "type": "snacks" }
// ]

const initialState:Grocery[] = [];

export const groceryReducer = createReducer(
    initialState,
    on(groceryAction.loadGrocerySuccess, (state: Grocery[], action: any) => {
        return action.payload;
    }),
    on(groceryAction.loadGroceryFailure, (state: Grocery[], action: any) => {
        return [];
    })
);