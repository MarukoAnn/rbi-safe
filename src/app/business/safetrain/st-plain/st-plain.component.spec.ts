import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StPlainComponent } from './st-plain.component';

describe('StPlainComponent', () => {
  let component: StPlainComponent;
  let fixture: ComponentFixture<StPlainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StPlainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StPlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
