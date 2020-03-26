import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTableWidgetComponent } from './main-table-widget.component';

describe('MainTableComponent', () => {
  let component: MainTableWidgetComponent;
  let fixture: ComponentFixture<MainTableWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTableWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTableWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
