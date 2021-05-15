import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
  ],
  declarations: [SearchListComponent, AlbumDetailComponent]
})
export class SearchModule { }
