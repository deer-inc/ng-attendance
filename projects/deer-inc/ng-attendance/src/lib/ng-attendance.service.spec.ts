import { TestBed } from '@angular/core/testing';

import { NgAttendanceService } from './ng-attendance.service';

describe('NgAttendanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgAttendanceService = TestBed.get(NgAttendanceService);
    expect(service).toBeTruthy();
  });
});
