import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sinput',
  templateUrl: './sinput.component.html',
  styleUrls: ['./sinput.component.scss']
})
export class SInputComponent implements OnInit {
  @Input('type') type:string;
  @Input('placeHolder') placeHolder: string;
  @Input('label') label: string;
  @Output() handleChange: EventEmitter<any>= new EventEmitter<any>();  
  constructor() { }

  ngOnInit() {
  }

  onChange(value){
    this.handleChange.emit(value);
  }

}
