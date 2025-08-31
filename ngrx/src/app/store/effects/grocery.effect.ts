import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { GroceryService } from '../../grocery.service';
import { Grocery } from '../../../models/grocery.model';
import { groceryAction } from '../actions/grocery.action';


@Injectable()
export class GroceryEffects {
  private actions$ = inject(Actions);
  private groceryService = inject(GroceryService);

  loadGrocery$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(groceryAction.loadGrocery),
        exhaustMap(() => this.groceryService.fetchAllGroceries()
          .pipe(
            map((grocery: Grocery[]) => (groceryAction.loadGrocerySuccess({payload: grocery}))),
            catchError(() => of(groceryAction.loadGroceryFailure()))
          ))
    );
  });
}