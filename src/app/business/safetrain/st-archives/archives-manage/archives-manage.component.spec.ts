import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesManageComponent } from './archives-manage.component';

describe('ArchivesManageComponent', () => {
  let component: ArchivesManageComponent;
  let fixture: ComponentFixture<ArchivesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivesManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
