import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleProcessComponent } from './trouble-process.component';

describe('TroubleProcessComponent', () => {
  let component: TroubleProcessComponent;
  let fixture: ComponentFixture<TroubleProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroubleProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
