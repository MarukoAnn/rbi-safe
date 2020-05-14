import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StDemandComponent } from './st-demand.component';

describe('StDemandComponent', () => {
  let component: StDemandComponent;
  let fixture: ComponentFixture<StDemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
