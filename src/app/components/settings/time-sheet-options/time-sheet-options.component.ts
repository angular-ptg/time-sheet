import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'ts-time-sheet-options',
  templateUrl: './time-sheet-options.component.html',
  styleUrls: ['./time-sheet-options.component.css']
})
export class TimeSheetOptionsComponent implements OnInit {
  
  optionsClass: string = "optionsClass";
  options: any = ["auto-populate-hours", "edit-2-weeks", "auto-submit"]
  constructor(private _appComponent:AppComponent) { }

  ngOnInit() {
    this._appComponent.showNavMenu = true;
  }

}
