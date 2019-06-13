import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { ListComponent } from './list/list.component';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [BooksComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
