import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import {HttpClient} from '@angular/common/http';

const URL_Menu_Info ='/employeeHolidayInfo/employeeHolidayInfo';
const URL_Menu ='../../../../../assets/json/employee-holiday-info-menu.json';
@Injectable()
export class EmployeeHolidayInfoService {

  holidayInfo:any;
  constructor(private _http: HttpClient) { }

  // getEmployeeHolidayData(){
  //   Observable.forkJoin(
  //     this._http.get(URL_Menu_Info),
  //     this._http.get(URL_Menu)
  //   ).subscribe(data=>{
  //     return data;
  //   },err=>{
  //     console.log(console.error(err))
  //   })
  // }

  getEmpHolidayInfo():Observable<any>{
    return this._http
               .get(URL_Menu_Info);
  }

  getEmpHolidayInfoMenu():Observable<any>{
    return this._http
              .get(URL_Menu);
  }

}
