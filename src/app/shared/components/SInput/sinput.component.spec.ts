import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SInputComponent } from './sinput.component';

describe('SInputComponent', () => {
  let component: SInputComponent;
  let fixture: ComponentFixture<SInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SInputComponent);
    component = fixture.componentInstance;
    component.label = 'Renderização de teste';
    component.type = 'text';
    component.placeHolder = 'Digite aqui...';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
