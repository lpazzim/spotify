import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()

export class SpotifyService {
  public $exibir = new EventEmitter<boolean>();
  constructor(private _httpClient: HttpClient) {

  }


  getRandomSearch(q) {
    var res = null;

    let params = new HttpParams();
    params = params.append('q', q);
    params = params.append('type', 'album');
    params = params.append('market', 'US');
    params = params.append('limit', '10');
    params = params.append('offset', '5');


    res = this._httpClient.get(`${environment.url}/search`, {
      params
    });
    return res;
  }


  getAlbum(id) {
    var res = null;

    res = this._httpClient.get(`${environment.url}/albums/${id}?market=US`, {});
    return res;
  }

  handleApiResponse(status, response) {
    console.log(status, response);
    if (status == 200) {
      console.log(response);
    }
    else if (status == 204) {
    }
    else if (status == 401) {
      localStorage.removeItem('access_token');
      window.location.href = `${window.location.origin}/login`;
    }
    else {
      console.log(response);
    }
  }
}