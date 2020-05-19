import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationManagerComponent } from './organization-manager.component';

describe('OrganizationManagerComponent', () => {
  let component: OrganizationManagerComponent;
  let fixture: ComponentFixture<OrganizationManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
