import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGlassComponent } from './new-glass.component';

describe('NewGlassComponent', () => {
  let component: NewGlassComponent;
  let fixture: ComponentFixture<NewGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
