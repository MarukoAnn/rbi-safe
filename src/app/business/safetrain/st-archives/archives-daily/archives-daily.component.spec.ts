import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesDailyComponent } from './archives-daily.component';

describe('ArchivesDailyComponent', () => {
  let component: ArchivesDailyComponent;
  let fixture: ComponentFixture<ArchivesDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivesDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
