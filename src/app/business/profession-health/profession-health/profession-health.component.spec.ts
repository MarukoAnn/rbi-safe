import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionHealthComponent } from './profession-health.component';

describe('ProfessionHealthComponent', () => {
  let component: ProfessionHealthComponent;
  let fixture: ComponentFixture<ProfessionHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
