import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import * as applicationActions from '../actions/app.actions';

@Injectable()
export class CounterEffects {

  constructor(private actions$: Actions) { }

  @Effect() readCountBy$ = this.actions$.pipe(
    ofType(applicationActions.APP_START),
    map(() => localStorage.getItem('count-by')),
    filter(count => count !== null),
    map(count => +count),
    map(count => new counterActions.CountBySet(count))
  );

  @Effect({ dispatch: false })
  logItAll$ = this.actions$.pipe(
    tap(a => console.log(`Effect got an action of type ${a.type}`))
  );

  @Effect({ dispatch: false })
  saveCountBy$ = this.actions$.pipe(
    // filter and cast SET_COUNT_BY actions
    ofType<counterActions.CountBySet>(counterActions.SET_COUNT_BY),
    map(a => a.by.toString()), // "3"
    tap(count => localStorage.setItem('count-by', count))
  );

}
