import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ViewTimeComponent } from './components/view-time/view-time.component';
import { LabelComponent } from './shared/label/label.component';


export function TranslateStaticLoadFactory(http: Http){
  return new TranslateStaticLoader(http,'./assets/i18n','.json');
}
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ViewTimeComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    BsDatepickerModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: TranslateStaticLoadFactory,
      deps: [Http]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
