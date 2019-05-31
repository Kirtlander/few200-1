import * as fromCounter from './counter.reducer';
import { createSelector } from '@ngrx/store';

export interface State {
  counter: fromCounter.State;
}

export const reducers = {
  counter: fromCounter.reducer
};

// Selector Functions

export const selectCurentCount =
  (state: State) => state.counter.current;

export const selectCountingBy = (state: State) => state.counter.by;

export const selectCantDecrement =
  // compose selectors using createSelector
  createSelector(selectCurentCount, selectCountingBy, (c, b) => c - b < 0);

export const selectAtTheStart =
  createSelector(selectCurentCount, c => c === 0);

