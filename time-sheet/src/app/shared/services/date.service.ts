import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DateService {
  // domain = '';
  date: Date;
  showNavMenu: boolean;
  managerNavMenu: boolean;
  constructor(private http: HttpClient) { }

    getReportTime(){
      return this.http.get('/reportTime/reportTime');
    }
    postReportTime(data){
        return this.http.post('/postReportTime/postReportTime', data);
    }
}
