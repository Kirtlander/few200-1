import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../models';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { ItemRemoved } from '../actions/list.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input()
  list: Book[];

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  remove(item: Book) {
    this.store.dispatch(new ItemRemoved(item));
  }

}
