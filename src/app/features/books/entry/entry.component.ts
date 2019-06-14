import { Component, OnInit, ViewChild } from '@angular/core';
import { BookEntity } from '../reducers/list.reducer';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { ItemAdded } from '../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  add(title: HTMLInputElement, author: HTMLInputElement, format: HTMLSelectElement) {
    this.store.dispatch(new ItemAdded({
      title: title.value,
      author: author.value,
      format: format.value
    } as any));
    title.value = '';
    author.value = '';
    format.value = 'Hardcover';
    title.focus();
  }

}
