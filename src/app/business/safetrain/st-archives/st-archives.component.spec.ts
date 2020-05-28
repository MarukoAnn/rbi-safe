import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {StArchivesComponent} from './st-archives.component';


describe('StDemandComponent', () => {
  let component: StArchivesComponent;
  let fixture: ComponentFixture<StArchivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StArchivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
