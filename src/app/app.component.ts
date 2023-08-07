import { Component } from '@angular/core';
import { Task } from './task/task';
import todoList from './__mocks__/todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  taskList: Task[] = todoList;
}
