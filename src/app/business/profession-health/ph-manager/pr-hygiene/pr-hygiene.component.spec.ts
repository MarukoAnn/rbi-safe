import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrHygieneComponent } from './pr-hygiene.component';

describe('PrHygieneComponent', () => {
  let component: PrHygieneComponent;
  let fixture: ComponentFixture<PrHygieneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrHygieneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrHygieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
