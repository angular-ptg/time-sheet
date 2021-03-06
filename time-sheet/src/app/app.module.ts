import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as email from "nativescript-email";
import { Module } from '@nestjs/common';
import { MailerModule } from '@nest-modules/mailer';

import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { CalendarModule } from '@progress/kendo-angular-dateinputs';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ClientInformationComponent } from './components/settings/client-information/client-information.component';
import { TimeSheetOptionsComponent } from './components/settings/time-sheet-options/time-sheet-options.component';
import { ViewTimeComponent } from './components/view-time/view-time.component';
import { LabelComponent } from './shared/label/label.component';
import { HolidayComponent } from './components/view-time/holidays/holidays.component';
import { TableComponent } from './shared/table/table.component';
import { EmployeeHolidayInfoComponent } from './components/view-time/employee-holiday-info/employee-holiday-info.component';
import { ClientInfoService } from './components/settings/shared/client-info.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { timeOffService } from './components/login/shared/timeOffService';
import { ReportTimeComponent } from './components/report-time/report-time.component';

import { AgGridModule } from 'ag-grid-angular/main';
import { DateService } from './shared/services/date.service';
import { HomeComponent } from './components/home/home.component';
import { ReportDetailsComponent } from './components/report-details/report-details.component';
import { ReportDetailsService } from './components/report-details/shared/report-details.service';
import { EmployeeDetailsComponent } from './components/report-details/employee-details/employee-details.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: AppComponent},
  {path: 'viewTime',  component: ViewTimeComponent},
  {path: 'settings',  component: SettingsComponent},
  {path: 'reportTime/:date', component: ReportTimeComponent},
  {path: 'dashboard', component: HomeComponent},
  {path: 'reportDetails', component: ReportDetailsComponent},
  {path: 'reportDetails/:empId', component: EmployeeDetailsComponent},
  {path: '**',  component: CalendarComponent}
];

export function TranslateStaticLoadFactory(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SettingsComponent,
    ClientInformationComponent,
    TimeSheetOptionsComponent,
    ViewTimeComponent,
    LabelComponent,
    HolidayComponent,
    TableComponent,
    EmployeeHolidayInfoComponent,
    LoginComponent,
    ReportTimeComponent,
    HomeComponent,
    ReportDetailsComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: TranslateStaticLoadFactory,
      deps: [Http]
    }),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ClientInfoService, timeOffService, DateService, ReportDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
