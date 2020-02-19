import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad1Component } from './actividad1.component';

describe('Actividad1Component', () => {
  let component: Actividad1Component;
  let fixture: ComponentFixture<Actividad1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Actividad1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Actividad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
