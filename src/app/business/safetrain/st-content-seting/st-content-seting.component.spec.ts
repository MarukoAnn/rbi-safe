import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StContentSetingComponent } from './st-content-seting.component';

describe('StContentSetingComponent', () => {
  let component: StContentSetingComponent;
  let fixture: ComponentFixture<StContentSetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StContentSetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StContentSetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
