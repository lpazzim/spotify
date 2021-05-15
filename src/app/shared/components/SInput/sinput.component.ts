import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sinput',
  templateUrl: './sinput.component.html',
  styleUrls: ['./sinput.component.scss']
})
export class SInputComponent {
  @Input() type: string;
  @Input() placeHolder: string;
  @Input() label: string;
  @Output() handleChange: EventEmitter<any> = new EventEmitter<any>();

  onChange(value) {
    this.handleChange.emit(value);
  }
}

