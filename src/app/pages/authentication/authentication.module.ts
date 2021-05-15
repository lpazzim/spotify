import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  imports: [
    AuthenticationRoutingModule,
    SharedModule
  ],
  declarations: [AuthenticationComponent]
})
export class SearchModule { }
