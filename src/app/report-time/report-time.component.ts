import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-report-time',
  templateUrl: './report-time.component.html',
  styleUrls: ['./report-time.component.css']
})
export class ReportTimeComponent implements OnInit {
week:any= [];
days= ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']

  constructor() { }

  ngOnInit() {
  }

}
