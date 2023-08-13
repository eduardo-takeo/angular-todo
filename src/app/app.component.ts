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
  isModalVisible: boolean = false;

  onCreateTaskClicked() {
    this.isModalVisible = true;
  }

  onDeleteTaskClicked(task: Task) {
    const newTaskList = this.taskList.filter(
      (listTask) => listTask.id != task.id
    );

    this.taskList = newTaskList;
  }
}

// BUGFIX:
// modal is not opening when it is closed,
// this happens because isVisible on modal.component resets to false, but isModalVisible on app.component doesnt
