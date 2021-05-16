import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CardAlbumComponent } from './card-album.component';

describe('CardAlbumComponent', () => {
  const albumData = {
    imgUrl: 'https://i.scdn.co/image/ab67616d00001e0231c73a24eff2186e4abe070d',
    artist: 'Dream Theater',
    name: 'A Dramatic Turn of Events'
  };
  let component: CardAlbumComponent;
  let fixture: ComponentFixture<CardAlbumComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardAlbumComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAlbumComponent);
    component = fixture.componentInstance;
    component.imageUrl = albumData.imgUrl;
    component.artist = albumData.artist;
    component.albumName = albumData.name;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
