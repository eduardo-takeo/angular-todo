import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  isDone: boolean = false;

  constructor(private taskService: TaskService) {}

  onTaskClicked(task: Task) {
    console.log(task); //TODO: implement Edit Task function
  }

  onDeleteClicked(task: Task) {
    this.taskService.removeItem(task);
  }
}
