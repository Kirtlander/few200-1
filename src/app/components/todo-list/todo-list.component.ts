import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListItem } from './models';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  get items$(): Observable<TodoListItem[]> {
    return this.service.todoList;
  }

  constructor(private service: TodoDataService) { }

  ngOnInit(): void {
  }

  markComplete(item: TodoListItem) {
    this.service.markComplete(item);
  }

  add(what: string) {
    this.service.add(what);
  }

  clearCompleted() {
    this.service.clearCompleted();
  }
}

