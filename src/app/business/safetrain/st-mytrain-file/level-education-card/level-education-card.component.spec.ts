import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelEducationCardComponent } from './level-education-card.component';

describe('LevelEducationCardComponent', () => {
  let component: LevelEducationCardComponent;
  let fixture: ComponentFixture<LevelEducationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelEducationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelEducationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
