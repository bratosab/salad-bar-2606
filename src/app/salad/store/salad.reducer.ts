import { createReducer, on } from '@ngrx/store';
import { Topping } from '../../models/topping.model';
import { ChooseTopping, RemoveTopping, SaveToppings } from './salad.actions';

export interface SaladState {
  toppings: Topping[];
  chosenToppings: Topping[];
}

export const intialState: SaladState = {
  toppings: [],
  chosenToppings: [],
};

export const saladReducer = createReducer(
  intialState,
  on(SaveToppings, (state, action) => ({ ...state, toppings: action.list })),
  on(ChooseTopping, (state, action) => ({
    ...state,
    chosenToppings: [...state.chosenToppings, action.choice],
  })),
  on(RemoveTopping, (state, action) => ({
    ...state,
    chosenToppings: [...state.chosenToppings].filter((t) => t.id !== action.choice.id),
  })),
);
