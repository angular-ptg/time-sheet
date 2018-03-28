import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { DateService } from '../../shared/services/date.service';

@Component({
  selector: 'ts-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private _appComponent: AppComponent, private _dateService: DateService) { }

  ngOnInit() {
    this._dateService.showNavMenu = true;
  }

}
