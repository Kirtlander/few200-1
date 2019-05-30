import { TodoListItem, TodoSummary } from './models';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export class TodoDataService {

  private data: TodoListItem[] = [
    { description: 'Fix Front Door', completed: false },
    { description: 'Change bathroom lightbulbs', completed: false },
    { description: 'Kill Thistles', completed: true }
  ];

  private todoListSubject = new BehaviorSubject<TodoListItem[]>(this.data);

  get todoList(): Observable<TodoListItem[]> {
    return this.todoListSubject.asObservable();
  }

  add(what: string) {
    const item = { description: what, completed: false };
    this.data = [item, ...this.data];
    this.todoListSubject.next(this.data);
  }

  clearCompleted() {
    this.data = this.data.filter(i => !i.completed);
    this.todoListSubject.next(this.data);
  }

  markComplete(item: TodoListItem) {
    const newItem = { description: item.description, completed: true };
    this.data = this.data.map(i => i === item ? newItem : item);
    this.todoListSubject.next(this.data);
  }

  getSummary(): Observable<TodoSummary> {
    return this.todoListSubject.pipe(
      map(list => {
        return {
          total: list.length,
          completed: list.filter(i => i.completed).length,
          incomplete: list.filter(i => !i.completed).length

        };
      })
    );
  }
}
