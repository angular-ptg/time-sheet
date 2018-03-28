import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportDetailsService } from './shared/report-details.service';
import { DateService } from '../../shared/services/date.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { Router } from '@angular/router';
import * as cryptojs from 'crypto-js';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {
  empData: any;
  reportDetails: any=[];
  
  @ViewChild(EmployeeDetailsComponent) empDetails: EmployeeDetailsComponent;
  constructor(private _reportDetails: ReportDetailsService,
              public dateService: DateService,
              private _router: Router) { }

  ngOnInit() {
    this.dateService.showNavMenu = true;
    this._reportDetails.getReportDetails().subscribe(data => {
     // this.reportDetails = data;
     // console.log(this.reportDetails[0]);
     this.empData =Object.values(data[0]);
     console.log(this.empData);
    })
  }
  

  empClicked(emp) {
    this._reportDetails.empInfo = emp;
    this._router.navigateByUrl('/reportDetails/' + this.getcipherText(emp.empId));
  }

  getcipherText(i){
    var rawStr = i.toString();
    var wordArray = cryptojs.enc.Utf8.parse(rawStr);
    var base64 = cryptojs.enc.Base64.stringify(wordArray);
    console.log('encrypted:', base64);
    return base64.toString();
  }


}
