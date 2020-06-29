import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiBulletinBoardComponent } from './gi-bulletin-board.component';

describe('GiBulletinBoardComponent', () => {
  let component: GiBulletinBoardComponent;
  let fixture: ComponentFixture<GiBulletinBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiBulletinBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiBulletinBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
