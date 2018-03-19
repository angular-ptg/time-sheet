import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'ts-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private _appComponent:AppComponent) { }

  ngOnInit() {
    this._appComponent.showNavMenu = true;
  }

}
