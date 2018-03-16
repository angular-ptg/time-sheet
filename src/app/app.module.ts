import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReportTimeComponent } from './report-time/report-time.component';
import {AgGridModule} from "ag-grid-angular/main";
import { GridcomponentComponent } from './gridcomponent/gridcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportTimeComponent,
    GridcomponentComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AgGridModule.withComponents([GridcomponentComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
