import { Bucket } from "../../../models/bucket.model";
import {createReducer, on} from '@ngrx/store';
import { addToBucket, removeFromBucket } from "../actions/bucket.action";

const initialState: Bucket[] = [];

export const bucketReducer = createReducer(
    initialState,
    on(addToBucket, (state: Bucket[], action: any) => {
        const bucketItem = state.find((item: Bucket) => item.id === action.payload.id);
        console.log("bucketItem", bucketItem);
        if(bucketItem) {
            return state.map((item: Bucket) => {
                return item.id === action.payload.id ? {...item, quantity: item.quantity + action.payload.quantity} : item;
            })
        } else {
            return [
                ...state,
                action.payload
            ]    
        }
    }),

    on(removeFromBucket, (state: Bucket[], action: any) => {
        const existItem = state.find((item: Bucket) => item.id === action.payload.id);
        if (existItem && existItem.quantity > 1) {
            return state.map((item: Bucket) => {
                return item.id === action.payload.id ? {...item, quantity: item.quantity - 1} : item;
            })
        } else {
            return state.filter((item: Bucket) => item.id !== action.payload.id);
        }
    })
);

