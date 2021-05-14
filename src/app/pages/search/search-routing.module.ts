import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

import { SearchListComponent } from "./search-list/search-list.component";

const routes: Routes = [
  { path: '', component: SearchListComponent },
  { path: ':id', component: SearchListComponent },
  {
    path: ':id/albumdetail',
    component: AlbumDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
