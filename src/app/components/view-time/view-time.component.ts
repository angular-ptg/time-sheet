import { Component, OnInit } from '@angular/core';

import {HolidayListService} from './holidays/shared/holiday-list.service'
import { AppComponent } from '../../app.component';

@Component({
  selector: 'ts-view-time',
  templateUrl: './view-time.component.html',
  styleUrls: ['./view-time.component.css'],
  providers:[HolidayListService]
})
export class ViewTimeComponent implements OnInit {

  public holidayInfo:any;
  public holidayList:any;
  constructor(private _holidayListService:HolidayListService,private _appComponent:AppComponent) {
    this._holidayListService.getHolidayList()
                            .subscribe(data=>
                              {
                                this.holidayList =data,
                                error=>console.log(error)
                              });
    this._holidayListService.getHolidayInfo()
                            .subscribe(data=>
                              {
                                this.holidayInfo=data,
                                error=>console.log(error)
                              });

   }

  ngOnInit() {
    this._appComponent.showNavMenu = true;
  }

}