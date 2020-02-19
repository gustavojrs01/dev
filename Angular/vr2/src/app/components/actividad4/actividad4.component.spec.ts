import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad4Component } from './actividad4.component';

describe('Actividad4Component', () => {
  let component: Actividad4Component;
  let fixture: ComponentFixture<Actividad4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Actividad4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Actividad4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
