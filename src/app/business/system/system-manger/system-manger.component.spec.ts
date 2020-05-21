import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMangerComponent } from './system-manger.component';

describe('SystemMangerComponent', () => {
  let component: SystemMangerComponent;
  let fixture: ComponentFixture<SystemMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
