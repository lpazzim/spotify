import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../../core/services/spotify.service';


@Component({
  selector: 'authenticationForm',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})

export class AuthenticationComponent implements OnInit {
  protected router: Router;
  constructor(
    protected injector: Injector,
    private spotifyService: SpotifyService
  ) {
    this.router = this.injector.get(Router);
  }

  ngOnInit() {
  }

  setToken(value) {
    if (value.length > 30) {
      localStorage.setItem('access_token', value);
    }
  }

  activeToken() { 
    if(localStorage.getItem('access_token')){
      this.router.navigate(['/album']);
    }
  }

}