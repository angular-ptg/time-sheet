import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSheetOptionsComponent } from './time-sheet-options.component';

describe('TimeSheetOptionsComponent', () => {
  let component: TimeSheetOptionsComponent;
  let fixture: ComponentFixture<TimeSheetOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSheetOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSheetOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
