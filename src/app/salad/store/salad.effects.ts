import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToppingsService } from '../../services/toppings-service';
import { GetToppings, SaveToppings } from './salad.actions';
import { exhaustMap, map } from 'rxjs';

export const loadToppings = createEffect(
  (action$ = inject(Actions), toppingsService = inject(ToppingsService)) => {
    return action$.pipe(
      ofType(GetToppings),
      exhaustMap(() =>
        toppingsService.getToppings().pipe(
            map((data) => SaveToppings({ list: data }))
        ),
      ),
    );
  }, { functional: true }
);
