import { TodoListItem } from './models';

export class TodoDataService {

  private items: TodoListItem[] = [
    { description: 'Fix Front Door', completed: false },
    { description: 'Change bathroom lightbulbs', completed: false },
    { description: 'Kill Thistles', completed: true }
  ];

  get todoList(): TodoListItem[] {
    return this.items;
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
