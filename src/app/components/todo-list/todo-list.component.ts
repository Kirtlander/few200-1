import { Component } from '@angular/core';
import { TodoListItem } from './models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  items: TodoListItem[] = [
    { description: 'Fix Front Door', completed: false },
    { description: 'Change bathroom lightbulbs', completed: false },
    { description: 'Kill Thistles', completed: true }
  ];

  markComplete(item: TodoListItem) {
    item.completed = true;
  }

  add(what: string) {
    this.items.unshift(
      {
        description: what,
        completed: false
      });
  }

  clearCompleted() {
    this.items = this.items.filter(i => !i.completed);
  }
}

