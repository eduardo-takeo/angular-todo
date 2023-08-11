import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() text: string = '';
  @Input() isVisible: boolean = false;

  onCancelClick() {
    this.isVisible = false;
  }
}
