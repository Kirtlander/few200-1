import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TodoListItem } from '../models';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  @Output()
  itemAdded = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addDescription(event: any) {
    if (event.key === 'Enter') {
      this.add(event.currentTarget);
    }
  }

  add(item: HTMLInputElement): void {
    if (!item.value) {
      return;
    }
    this.itemAdded.emit(item.value);
    item.value = '';
    item.focus();
  }
}
