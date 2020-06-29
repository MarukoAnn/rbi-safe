import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrHealthCheckComponent } from './pr-health-check.component';

describe('PrHealthCheckComponent', () => {
  let component: PrHealthCheckComponent;
  let fixture: ComponentFixture<PrHealthCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrHealthCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrHealthCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
