import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { GridOptions } from 'ag-grid/main';
import { DateService } from '../../shared/services/date.service';


@Component({
  selector: 'ts-report-time',
  templateUrl: './report-time.component.html',
  styleUrls: ['./report-time.component.css']
})
export class ReportTimeComponent implements OnInit {
  week: any = [];
  days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  public gridOptions: GridOptions;
  columnDefs: any[];
  rowData: any[];

  headerClass: string = "headerName";
  gridApi;
  gridColumnApi;
  defaultColDef;
  startDate: Date;
  endDate: Date;
  dates: string[]=[];
  constructor(private _appComponent: AppComponent, private _dateService: DateService) {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.getRowStyle = function (params) {
      if (params.node.rowIndex % 2 === 1) {
        return { background: '#cee4ea', 'text-align': 'center', height: '55px' }
      } else {
        return { background: '#F3F3F3', 'text-align': 'center', 'padding-bottom': '15px' }
      }
    }   
  }


  ngOnInit() {
    this._appComponent.showNavMenu = true;
    this.startDate = new Date(this._dateService.date);
    this.startDate.setDate(this.startDate.getDate() - this.startDate.getDay() + 1);
    this.endDate = new Date(this.startDate);
    for(var i = 0; i<=6; i++) {
      var someDate = new Date(this.startDate);
      someDate.setDate(this.startDate.getDate() + i)
      
      this.dates.push(someDate.toLocaleDateString().split('/')[0]+'/'+ someDate.toLocaleDateString().split('/')[1]);
    }
    this.endDate.setDate(this.endDate.getDate() + 6);
    this.columnDefs = [
      {
        headerName: "TYPE",
        field: "type",
        width: 100
      },
      {
        headerName: "Monday ("+this.dates[0]+")",
        field: "monday",
        editable: true,
        width: 100
      },
      {
        headerName: "Tuesday ("+this.dates[1]+")",
        field: "tuesday",
        editable: true,
        width: 100
      },
      {
        headerName: "Wednesday ("+this.dates[2]+")",
        field: "wednesday",
        editable: true,
        width: 110
      },
      {
        headerName: "Thursday ("+this.dates[3]+")",
        field: "thursday",
        editable: true,
        width: 100
      },
      {
        headerName: "Friday ("+this.dates[4]+")",
        field: "friday",
        editable: true,
        width: 100
      },
      {
        headerName: "Saturday ("+this.dates[5]+")",
        field: "saturday",
        editable: true,
        width: 100
      },
      {
        headerName: "Sunday ("+this.dates[6]+")",
        field: "sunday",
        editable: true,
        width: 100
      },

    ];

    this.rowData = [
      {
        type: "Billable",
        monday: 10,
        tuesday: 10,
        wednesday: 10,
        thursday: 0,
        friday: 10,
        saturday: 0,
        sunday: 0
      },
      {
        type: "Non Billable",
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 10,
        friday: 0,
        saturday: 0,
        sunday: 0
      },
    ]
  }
  onGridReady(params) {
    params.api.sizeColumnsToFit();

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;


    params.api.setRowData(this.rowData);
  }

  selectAllRows() {
    this.gridOptions.api.selectAll();
  }
}


