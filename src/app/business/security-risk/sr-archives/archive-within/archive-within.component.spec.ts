import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveWithinComponent } from './archive-within.component';

describe('ArchiveWithinComponent', () => {
  let component: ArchiveWithinComponent;
  let fixture: ComponentFixture<ArchiveWithinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveWithinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveWithinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
