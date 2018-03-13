import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ts-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() holidayList;
  constructor() { }

  ngOnInit() {
  }

}
