import * as fromCounter from './counter.reducer';

export interface State {
  counter: fromCounter.State;
}

export const reducers = {
  counter: fromCounter.reducer
};

// Selector Functions

export const selectCurentCount =
  (state: State) => state.counter.current;

