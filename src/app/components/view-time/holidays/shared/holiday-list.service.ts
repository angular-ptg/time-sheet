import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';


const URL_Menu ='../../../../../assets/json/holiday-menu.json';
const URL_Holiday_data ='../../../../../assets/json/holiday-list.json';
@Injectable()
export class HolidayListService {

  constructor(private _http: HttpClient) { }

  getHolidayInfo():Observable<any>{
    return this._http
              .get(URL_Menu);
  }
  getHolidayList():Observable<any>{
    return this._http
               .get(URL_Holiday_data);
  }

}
