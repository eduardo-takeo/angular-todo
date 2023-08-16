import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import { TaskService } from '../task/task.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  inputText: string = '';
  isVisible$ = this.modalService.isVisible$;

  constructor(
    private taskService: TaskService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  addItem(title: string) {
    this.taskService.addItem({
      id: uuid(),
      title,
      status: 'ACTIVE',
    });

    this.inputText = '';
    this.modalService.hideModal();
  }

  hideModal() {
    this.inputText = '';
    this.modalService.hideModal();
  }
}
