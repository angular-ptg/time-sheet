import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { GridcomponentComponent } from '../gridcomponent/gridcomponent.component';


@Component({
  selector: 'ts-report-time',
  templateUrl: './report-time.component.html',
  styleUrls: ['./report-time.component.css']
})
export class ReportTimeComponent implements OnInit {

  ngOnInit() {
  }
  // week:any= [];
  // days= ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
  // billable:any = [8,8,8,8,8,8];
  private gridOptions: GridOptions;
  columnDefs: any[];
  rowData: any[];

  headerClass: string = "headerName";
  gridApi;
  gridColumnApi;
  defaultColDef;

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.getRowStyle = function (params) {
      if (params.node.rowIndex % 2 === 1) {
        return { background: '#cee4ea', 'text-align': 'center' }
      } else {
        return { background: '#F3F3F3', 'text-align': 'center' }
      }
    }
    this.columnDefs = [
      {
        headerName: "TYPE",
        field: "type",
        width: 100
      },
      {
        headerName: "Monday",
        field: "monday",
        editable: true,
        width: 100
      },
      {
        headerName: "Tuesday",
        field: "tuesday",
        editable: true,
        width: 100
      },
      {
        headerName: "Wednesday",
        field: "wednesday",
        editable: true,
        width: 100
      },
      {
        headerName: "Thursday",
        field: "thursday",
        editable: true,
        width: 100
      },
      {
        headerName: "Friday",
        field: "friday",
        editable: true,
        width: 100
      },
      {
        headerName: "Saturday",
        field: "saturday",
        editable: true,
        width: 100
      },
      {
        headerName: "Sunday",
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
        saturday:0,
        sunday:0
      },
      {
        type: "Non Billable",
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 10,
        friday: 0,
        saturday:0,
        sunday:0
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
