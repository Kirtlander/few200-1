import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { ListComponent } from './list/list.component';
import { EntryComponent } from './entry/entry.component';
import { FEATURE_NAME } from './reducers';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  declarations: [BooksComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, reducers)
  ]
})
export class BooksModule { }
