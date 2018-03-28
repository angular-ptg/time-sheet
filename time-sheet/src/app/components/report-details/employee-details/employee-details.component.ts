import { Component, OnInit } from '@angular/core';
import { ReportDetailsService } from '../shared/report-details.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  empInfo;
  constructor(private _reportDetails: ReportDetailsService) { }

  ngOnInit() {
    this.empInfo = this._reportDetails.empInfo;
  }
}
