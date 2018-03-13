import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import {HttpClient} from '@angular/common/http';
import { EmployeeHolidayInfoService } from './shared/employee-holiday-info.service';


const URL_Menu_Info ='../../../../../assets/json/employee-holiday-info.json';
const URL_Menu ='../../../../../assets/json/employee-holiday-info-menu.json';
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
                                        this.empHolidayInfo = data,
                                        console.log("emp:"+this.empHolidayInfo);
                                      });
    // this._employeeHolidayInfoService.getEmpHolidayInfoMenu()
    //                                 .subscribe(data=>
    //                                   {
    //                                     this.employeeHolidayMenuInfo = data,
    //                                     console.log("emp:"+this.employeeHolidayMenuInfo);
    //                                   });
  
    
    } 
  ngOnInit() {  
  //   console.log("emp holiday:"+this.empHolidayInfo);    
  // this.empData = _.pluck(this.empHolidayInfo,'RemainingVaction');
  // console.log("emp data:"+this.empData);
  }

}
