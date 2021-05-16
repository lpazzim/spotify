import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'album', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) },
  { path: 'login', loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.SearchModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
