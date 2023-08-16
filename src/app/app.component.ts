import { Component } from '@angular/core';
import { Task } from './task/task';
import todoList from './__mocks__/todoList';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  taskList: Task[] = todoList;

  constructor(private modalService: ModalService) {}

  onDeleteTaskClicked(task: Task) {
    const newTaskList = this.taskList.filter(
      (listTask) => listTask.id != task.id
    );

    this.taskList = newTaskList;
  }

  openModal() {
    this.modalService.showModal();
  }
}
