import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ClientInformationComponent } from './components/settings/client-information/client-information.component';
import { TimeSheetOptionsComponent } from './components/settings/time-sheet-options/time-sheet-options.component';
import { ViewTimeComponent } from './components/view-time/view-time.component';
import { LabelComponent } from './shared/label/label.component';
import { HolidayComponent } from './components/view-time/holidays/holidays.component';
import { TableComponent } from './shared/table/table.component';
import { EmployeeHolidayInfoComponent } from './components/view-time/employee-holiday-info/employee-holiday-info.component';
import { ClientInfoService } from './components/settings/shared/client-info.service';


export function TranslateStaticLoadFactory(http: Http){
  return new TranslateStaticLoader(http,'./assets/i18n','.json');
}
@NgModule({
  declarations: [
    AppComponent,
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
    HttpClientModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: TranslateStaticLoadFactory,
      deps: [Http]
    }),
  ],
  providers: [ClientInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
