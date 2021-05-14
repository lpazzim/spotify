import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlbumComponent } from './card-album.component';

describe('CardAlbumComponent', () => {
  let component: CardAlbumComponent;
  let fixture: ComponentFixture<CardAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
