import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgAttendanceModule } from '@deer-inc/ng-attendance';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgAttendanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
