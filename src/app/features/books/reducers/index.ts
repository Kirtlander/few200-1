import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list.reducer';
import { Book } from '../models';

export const FEATURE_NAME = 'booksFeature';
export interface State {
  list: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};


// selectors

// 1. "Feature Selecstor"
export const selectFeature = createFeatureSelector<State>(FEATURE_NAME);

// 2. A selector for each "branch" of the features state.
export const selectListBranch = createSelector(selectFeature, f => f.list);

// export const { selectAll: selectAllShippingItems } = fromList.adapter.getSelectors(selectListBranch);
export const selectAllBooks = fromList.adapter.getSelectors(selectListBranch).selectAll;

// 3. The selectors for the actual components

export const selectBookItems =
  createSelector(selectAllBooks, items => items as Book[]);
