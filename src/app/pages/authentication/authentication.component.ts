import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../../core/services/spotify.service';


@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})

export class AuthenticationComponent {
  protected router: Router;
  constructor(
    protected injector: Injector,
    private spotifyService: SpotifyService
  ) {
    this.router = this.injector.get(Router);
  }



  setToken(value) {
    if (value.length > 30) {
      localStorage.setItem('access_token', value);
    }
  }

  activeToken() {
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['/album']);
    }
  }

}
