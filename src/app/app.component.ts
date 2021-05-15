import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protected router: Router;
  title = 'spotify';

  constructor(
    protected injector: Injector,
  ){
    this.router = this.injector.get(Router);
  }


  ngOnInit() {
    localStorage.setItem('environment', environment.environmentDescription);
    if(window.location.pathname === '/'){
      this.router.navigate(['/login']);
    }
  }
}
