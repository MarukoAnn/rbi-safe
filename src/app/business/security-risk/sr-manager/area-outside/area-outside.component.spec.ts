import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaOutsideComponent } from './area-outside.component';

describe('AreaOutsideComponent', () => {
  let component: AreaOutsideComponent;
  let fixture: ComponentFixture<AreaOutsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaOutsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
