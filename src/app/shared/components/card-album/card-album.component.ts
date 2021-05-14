import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
  styleUrls: ['./card-album.component.scss']
})
export class CardAlbumComponent implements OnInit {
  @Input('artist') artist:string;
  @Input('albumName') albumName: string;
  @Input('imageUrl') imageUrl: string;
  @Input('id') id: string;
  @Output() handleClick: EventEmitter<any>= new EventEmitter<any>(); 
  constructor() { }

  ngOnInit() {
  }

  onClick(value){    
    this.handleClick.emit(value);
  }
}
