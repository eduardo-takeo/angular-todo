import { Component } from '@angular/core';
import { Task } from './task/task';
import { ModalService } from './modal/modal.service';
import { TaskService } from './task/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  taskList: Task[] = [];

  constructor(
    private taskService: TaskService,
    private modalService: ModalService
  ) {
    this.taskList = this.taskService.getItems();
  }

  onDeleteTaskClicked(task: Task) {
    this.taskService.removeItem(task);
  }

  openModal() {
    this.modalService.showModal();
  }
}
