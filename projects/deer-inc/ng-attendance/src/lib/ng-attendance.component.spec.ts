import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAttendanceComponent } from './ng-attendance.component';
import { MatCardModule, MatDividerModule, MatTableModule, MatSlideToggleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { HttpClientModule } from '@angular/common/http';

describe('NgAttendanceComponent', () => {
  let component: NgAttendanceComponent;
  let fixture: ComponentFixture<NgAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAttendanceComponent ],
      imports: [
        MatCardModule,
        MatDividerModule,
        MatTableModule,
        MatSlideToggleModule,
        FormsModule,
        NgxMaterialTimepickerModule,
        HttpClientModule
      ]
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
