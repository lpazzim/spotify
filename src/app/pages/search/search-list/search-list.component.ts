import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SpotifyService } from '../../../core/services/spotify.service';

interface Album {
  id: string;
  name: string;
  artist: string;
  image: string;
}

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})

export class SearchListComponent implements OnInit {
  protected router: Router;
  protected route: ActivatedRoute;
  private subjectKeyUp = new Subject<any>();

  listAlbums: Album[] = [];
  presentationText = 'Álbuns buscados recentemente';

  constructor(
    protected injector: Injector,
    private spotifyService: SpotifyService
  ) {
    this.router = this.injector.get(Router);
    this.route = this.injector.get(ActivatedRoute);
  }

  ngOnInit() {
    this.initLoad();
    this.subjectKeyUp.pipe(debounceTime(800)).subscribe((value) => {
      this.searchAlbuns(value);
    });
  }


  initLoad() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.searchAlbuns(id);
    } else {
      if (localStorage.getItem('lastSearch')) {
        this.listAlbums = JSON.parse(localStorage.getItem('lastSearch'));
      }
    }
  }

  processSearch(value) {
    this.subjectKeyUp.next(value);
  }


  async searchAlbuns(data) {
    if (data.length > 0) {
      this.presentationText = `Apresentando resultados para '${data}'`;

      await this.spotifyService.getRandomSearch(data).subscribe(res => {
        const albums = res.albums.items.map(album => {
          return {
            id: album.id,
            name: album.name,
            artist: album.artists.shift().name,
            image: album.images.find(e => e.height === 300).url
          };
        });
        this.listAlbums = albums;
        localStorage.setItem('lastSearch', JSON.stringify(albums));
      }, err => {
        this.spotifyService.handleApiResponse(err.status, err.message);
      });
    } else {
      this.presentationText = 'Álbuns buscados recentemente';
    }
  }

  openAlbum(id) {
    this.router.navigate([`/album/${id}/albumdetail`]);
  }
}
