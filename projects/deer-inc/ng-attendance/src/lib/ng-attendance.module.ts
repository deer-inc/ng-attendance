import { NgModule } from '@angular/core';
import { NgAttendanceComponent } from './ng-attendance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule, MatDividerModule, MatTableModule, MatSlideToggleModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NgAttendanceComponent],
  imports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatSlideToggleModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    HttpClientModule
  ],
  exports: [NgAttendanceComponent]
})
export class NgAttendanceModule { }
