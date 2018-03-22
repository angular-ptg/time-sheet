import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { DateService } from '../../../shared/services/date.service';

@Component({
  selector: 'ts-time-sheet-options',
  templateUrl: './time-sheet-options.component.html',
  styleUrls: ['./time-sheet-options.component.css']
})
export class TimeSheetOptionsComponent implements OnInit {
  
  optionsClass: string = "optionsClass";
  options: any = ["auto-populate-hours", "edit-2-weeks", "auto-submit"]
  constructor(private _appComponent:AppComponent, private _dateService: DateService) { }

  ngOnInit() {
    this._dateService.showNavMenu = true;
  }

}
