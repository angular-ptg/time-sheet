import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class DateService {
  date: Date;
  showNavMenu: boolean;
  constructor(private http: HttpClient) { }

  getUserData(){
    return this.http.get('http://localhost:3000/products');
  }
}
