import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SInputComponent } from './sinput.component';

describe('SInputComponent', () => {
  let component: SInputComponent;
  let fixture: ComponentFixture<SInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
