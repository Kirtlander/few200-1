import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListItem } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  list: TodoListItem[];

  @Output() clear = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  markComplete(item: TodoListItem) {
    item.completed = true;
  }

  clearCompleted() {
    this.clear.emit();
  }
}
