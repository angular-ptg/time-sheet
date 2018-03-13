import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { Routes, RouterModule } from '@angular/router';

import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ViewTimeComponent } from './components/view-time/view-time.component';
import { LabelComponent } from './shared/label/label.component';
import { HolidayComponent } from './components/view-time/holidays/holidays.component';
import { TableComponent } from './shared/table/table.component';
import { EmployeeHolidayInfoComponent } from './components/view-time/employee-holiday-info/employee-holiday-info.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
