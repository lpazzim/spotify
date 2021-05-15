import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
  styleUrls: ['./card-album.component.scss']
})
export class CardAlbumComponent {
  @Input() artist: string;
  @Input() albumName: string;
  @Input() imageUrl: string;
  @Input() id: string;
  @Output() handleClick: EventEmitter<any> = new EventEmitter<any>();

  onClick(value) {
    this.handleClick.emit(value);
  }
}

