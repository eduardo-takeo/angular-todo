import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input({ required: true }) label: string = 'Button';

  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
