import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandReviewComponent } from './demand-review.component';

describe('DemandReviewComponent', () => {
  let component: DemandReviewComponent;
  let fixture: ComponentFixture<DemandReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
