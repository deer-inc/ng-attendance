import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAttendanceComponent } from './ng-attendance.component';

describe('NgAttendanceComponent', () => {
  let component: NgAttendanceComponent;
  let fixture: ComponentFixture<NgAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
