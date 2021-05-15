import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../../core/services/spotify.service';
import { convertDurationToTimeString } from './../../../core/utils/utils';

interface Album {
  id: string;
  name: string;
  artist: string;
  image: string;
}


interface Track {
  name: string;
  track_number: string;
  duration_ms: string;
  preview_url: string;
  artist: string;
}

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})



export class AlbumDetailComponent implements OnInit {
  protected router: Router;
  protected route: ActivatedRoute;
  selectedAlbum;
  selectedTracks;
  playing: Track;
  isPlaying = false;
  isPaused = false;

  constructor(
    protected injector: Injector,
    private spotifyService: SpotifyService
  ) {
    this.router = this.injector.get(Router);
    this.route = this.injector.get(ActivatedRoute);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getAlbum(id);
  }

  async getAlbum(id) {
    await this.spotifyService.getAlbum(id).subscribe(res => {
      const album = {
        id: res.id,
        name: res.name,
        artist: res.artists.shift().name,
        image: res.images.find(e => e.height === 300).url,
        tracks: res.tracks.items
      };
      this.selectedAlbum = album;

      const tracks = album.tracks.map(track => {
        return {
          name: track.name,
          track_number: track.track_number,
          duration_ms: convertDurationToTimeString(Number(track.duration_ms)),
          preview_url: track.preview_url,
          artist: track.artists.shift().name,
        };
      });
      this.selectedTracks = tracks;
    }, err => {
      this.spotifyService.handleApiResponse(err.status, err.message);
    });
  }

  playTrack(track) {
    this.playing = track;
    this.isPlaying = true;
    this.isPaused = false;
  }

  pause() {
    const elemento = document.getElementById('player') as HTMLAudioElement;
    this.isPaused = true;
    this.isPlaying = false;
    elemento.pause();
  }

  play() {
    const elemento = document.getElementById('player') as HTMLAudioElement;
    this.isPlaying = true;
    this.isPaused = false;
    elemento.play();
  }


  back() {
    this.router.navigate(['/album']);
  }
}
