import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ts-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidayComponent implements OnInit {

  @Input() header: string;
  @Input() holidayList:any;

  constructor() {    
  }

  ngOnInit() {
  }

}
