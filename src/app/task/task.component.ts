import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  isDone: boolean = false;

  @Output() onDeleteTaskClick = new EventEmitter();

  onClick(task: Task) {
    this.onDeleteTaskClick.emit();
  }
}
