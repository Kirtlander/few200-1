import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, selectBookItems } from './reducers';
import { Book } from './models';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  stuff$: Observable<Book[]>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.stuff$ = this.store.select(selectBookItems);
  }

}
