import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-list/todo-data.service';
import { TodoSummary } from '../todo-list/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  get summary$(): Observable<TodoSummary> {
    return this.service.getSummary();
  }

  constructor(private service: TodoDataService) { }

  ngOnInit() {
  }

}
