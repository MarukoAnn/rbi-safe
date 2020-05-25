import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleArchivesComponent } from './trouble-archives.component';

describe('TroubleArchivesComponent', () => {
  let component: TroubleArchivesComponent;
  let fixture: ComponentFixture<TroubleArchivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroubleArchivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
