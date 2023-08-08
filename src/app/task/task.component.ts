import { Component, Input } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task; //INFO: Props -> use @Input annotation
  isDone: boolean = false; //INFO: State -> use [(ngModel)] to bind a property to the class attribute
}
