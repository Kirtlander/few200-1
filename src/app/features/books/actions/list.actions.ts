import { Action } from '@ngrx/store';
import { BookEntity } from '../reducers/list.reducer';

let currentFakeId = 1;

export const REMOVE_ITEM = '[books] removed item';
export class ItemRemoved implements Action {
  readonly type = REMOVE_ITEM;
  constructor(public payload: BookEntity) { }
}

export const ADD_ITEM = '[books] add item';
export class ItemAdded implements Action {
  readonly type = ADD_ITEM;
  payload: BookEntity;
  constructor(what: BookEntity) {
    this.payload = Object.assign({}, what, { id: 'TEMP' + (currentFakeId++).toString() });
  }
}

export type All =
  ItemAdded
  | ItemRemoved;
