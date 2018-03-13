import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { Routes, RouterModule } from '@angular/router';

import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

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

const appRoutes: Routes =[
  {path: 'dashBoard', component: CalendarComponent},
  {path: 'viewTime',  component: ViewTimeComponent},
  {path: '**',  component: CalendarComponent}
];

export function TranslateStaticLoadFactory(http: Http){
  return new TranslateStaticLoader(http,'./assets/i18n','.json');
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
    EmployeeHolidayInfoComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: TranslateStaticLoadFactory,
      deps: [Http]
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ClientInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
