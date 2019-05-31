import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectCurentCount, selectCantDecrement, selectCountingBy, selectAtTheStart } from 'src/app/reducers';
import { Observable } from 'rxjs';
import * as counterActions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
  cantDecrement$: Observable<boolean>;
  by$: Observable<number>;
  atTheStart$: Observable<boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.count$ = this.store.select(selectCurentCount);
    this.by$ = this.store.select(selectCountingBy);
    this.cantDecrement$ = this.store.select(selectCantDecrement);
    this.atTheStart$ = this.store.select(selectAtTheStart);
  }

  increment() {
    this.store.dispatch(new counterActions.CountIncremented());
  }

  decrement() {
    this.store.dispatch(new counterActions.CountDecremented());
  }

  reset() {
    this.store.dispatch(new counterActions.CountReset());
  }

  setCountBy(what: number) {
    this.store.dispatch(new counterActions.CountBySet(what));
  }

}
