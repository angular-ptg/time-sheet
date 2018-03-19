import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private _appComponent:AppComponent, private _router:Router) { }

  ngOnInit() {
    this._appComponent.showNavMenu = true;
  }

  //On changing the date
  ReportTime(date:Date){
    console.log("date "+date);
    this._router.navigateByUrl('/reportTime'); 
  }

}
