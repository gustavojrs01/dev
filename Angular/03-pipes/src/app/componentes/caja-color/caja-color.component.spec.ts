import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaColorComponent } from './caja-color.component';

describe('CajaColorComponent', () => {
  let component: CajaColorComponent;
  let fixture: ComponentFixture<CajaColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
