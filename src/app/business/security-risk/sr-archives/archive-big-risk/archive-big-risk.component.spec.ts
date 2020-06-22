import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveBigRiskComponent } from './archive-big-risk.component';

describe('ArchiveBigRiskComponent', () => {
  let component: ArchiveBigRiskComponent;
  let fixture: ComponentFixture<ArchiveBigRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveBigRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveBigRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
