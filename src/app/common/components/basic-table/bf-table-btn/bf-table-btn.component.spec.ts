import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BfTableBtnComponent } from './bf-table-btn.component';

describe('BfTableBtnComponent', () => {
  let component: BfTableBtnComponent;
  let fixture: ComponentFixture<BfTableBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfTableBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfTableBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
