import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Unidad1Component } from './unidad1.component';

describe('Unidad1Component', () => {
  let component: Unidad1Component;
  let fixture: ComponentFixture<Unidad1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Unidad1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Unidad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
