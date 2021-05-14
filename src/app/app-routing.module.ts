import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'album', loadChildren: './pages/search/search.module#SearchModule' },
  { path: 'login', loadChildren: './pages/authentication/authentication.module#SearchModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
