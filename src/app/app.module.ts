import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { ViewTimeComponent } from './components/view-time/view-time.component';
import { LabelComponent } from './shared/label/label.component';


export function TranslateStaticLoadFactory(http: Http){
  return new TranslateStaticLoader(http,'./assets/i18n','.json');
}
@NgModule({
  declarations: [
    AppComponent,
    ViewTimeComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule,
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
