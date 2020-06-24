import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhManagerComponent } from './ph-manager.component';

describe('PhManagerComponent', () => {
  let component: PhManagerComponent;
  let fixture: ComponentFixture<PhManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
