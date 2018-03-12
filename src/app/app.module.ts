import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ClientInformationComponent } from './components/settings/client-information/client-information.component';
import { TimeSheetOptionsComponent } from './components/settings/time-sheet-options/time-sheet-options.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    ClientInformationComponent,
    TimeSheetOptionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
