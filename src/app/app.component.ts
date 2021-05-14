import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigate(['/login']);
  }
}
