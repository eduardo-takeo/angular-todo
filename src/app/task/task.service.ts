import { Injectable } from '@angular/core';
import { Task } from './task';

import todoList from '../__mocks__/todoList';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskList: Task[] = todoList; // TODO: remove mock and fetch tasks after backend is done

  addItem(item: Task): void {
    this.taskList.push(item);
  }

  removeItem(item: Task): void {
    const index = this.taskList.indexOf(item);
    if (index !== -1) {
      this.taskList.splice(index, 1);
    }
  }

  getItems(): Task[] {
    return this.taskList;
  }
}
