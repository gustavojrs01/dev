import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad5Component } from './actividad5.component';

describe('Actividad5Component', () => {
  let component: Actividad5Component;
  let fixture: ComponentFixture<Actividad5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Actividad5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Actividad5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
