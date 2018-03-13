import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientInfoService {

  constructor(private _http:HttpClient) { }

  getClientInfo() {
    return this._http.get('../../../../assets/json/clientInfo.json')
  }

}
