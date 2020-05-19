import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlInputComponent } from './pl-input.component';

describe('PlInputComponent', () => {
  let component: PlInputComponent;
  let fixture: ComponentFixture<PlInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
