import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';
import { FEATURE_NAME, reducers } from './reducers';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [BooksComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, reducers)
  ]
})
export class BooksModule { }
