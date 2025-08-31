import { Grocery } from "../../../models/grocery.model";
import {createSelector, createFeatureSelector} from "@ngrx/store";

//export const selectGroceries = (state:{grocery: Grocery[]}) => state.grocery;
export const selectGroceries = createFeatureSelector<Grocery[]>("grocery");

// static selector => we are passing fruit in static way 
export const selectGroceryByType = createSelector(
    selectGroceries,
    (state: Grocery[]) => {
        return state.filter((item: Grocery) => item.type === 'fruit');
    }
)

export const selectGroceryByTypeDynamic = (type: string) => createSelector(
    selectGroceries,
    (state: Grocery[]) => state.filter((item: Grocery) => item.type === type)
)
