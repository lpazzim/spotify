import { NgModule } from '@angular/core';
import { SInputComponent } from './components/SInput/sinput.component';
import { CardAlbumComponent } from './components/card-album/card-album.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,    
  ],
  declarations: [
    SInputComponent,
    CardAlbumComponent
  ],
  exports: [
    SInputComponent,
    CardAlbumComponent
  ]
})
export class SharedModule { }
