import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReportDetailsService {
  empInfo: any;
  constructor(private _http: HttpClient) { }

  getReportDetails() {
    return this._http.get('/reportDetails/reportDetails');
  }
}
