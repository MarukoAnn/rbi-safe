import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrManagerComponent } from './sr-manager.component';

describe('SrManagerComponent', () => {
  let component: SrManagerComponent;
  let fixture: ComponentFixture<SrManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
