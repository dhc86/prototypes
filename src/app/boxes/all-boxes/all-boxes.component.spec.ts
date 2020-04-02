import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBoxesComponent } from './all-boxes.component';

describe('AllBoxesComponent', () => {
  let component: AllBoxesComponent;
  let fixture: ComponentFixture<AllBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
