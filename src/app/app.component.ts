import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { ApplicationStarted } from './actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Front-End Web 200 with Angular';

  constructor(store: Store<State>) {
    store.dispatch(new ApplicationStarted());
  }
}
