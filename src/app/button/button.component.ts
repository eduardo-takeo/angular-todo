import { Component, EventEmitter, Input, Output } from '@angular/core';

export type Colors = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input({ required: true }) label: string = 'Button';
  @Input() color: Colors = 'primary';

  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
