import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import {HttpClient} from '@angular/common/http';
import { EmployeeHolidayInfoService } from './shared/employee-holiday-info.service';


const URL_Menu ='/holidayMenu/holidayMenu';
const URL_Holiday_data ='/holidayList/holidayList';
@Component({
  selector: 'ts-employee-holiday-info',
  templateUrl: './employee-holiday-info.component.html',
  styleUrls: ['./employee-holiday-info.component.css'],
  providers:[EmployeeHolidayInfoService]
})
export class EmployeeHolidayInfoComponent implements OnInit {

  empHolidayInfo:any;
  empInfoStyles:string="emp-info";
  constructor(private _employeeHolidayInfoService:EmployeeHolidayInfoService,private _http:HttpClient) {

    this._employeeHolidayInfoService.getEmpHolidayInfo()
                                    .subscribe(data =>
                                      {
                                        this.empHolidayInfo = data;
                                      //  this.empHolidayInfo=this.empHolidayInfo.shift();
                                        console.log(this.empHolidayInfo);
                                      });
    } 
  ngOnInit() { 
  }

}
