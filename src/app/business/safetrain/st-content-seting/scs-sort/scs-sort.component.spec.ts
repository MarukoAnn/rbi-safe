import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScsSortComponent } from './scs-sort.component';

describe('ScsSortComponent', () => {
  let component: ScsSortComponent;
  let fixture: ComponentFixture<ScsSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScsSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScsSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
