import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RkDiscernComponent } from './rk-discern.component';

describe('RkDiscernComponent', () => {
  let component: RkDiscernComponent;
  let fixture: ComponentFixture<RkDiscernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RkDiscernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RkDiscernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
