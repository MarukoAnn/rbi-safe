import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaWithinComponent } from './area-within.component';

describe('AreaWithinComponent', () => {
  let component: AreaWithinComponent;
  let fixture: ComponentFixture<AreaWithinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaWithinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaWithinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
