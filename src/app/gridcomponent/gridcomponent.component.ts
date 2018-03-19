import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridcomponent',
  templateUrl: './gridcomponent.component.html',
  styleUrls: ['./gridcomponent.component.css']
})
export class GridcomponentComponent implements OnInit {
  private params: any;
  agInit(params: any): void {
    this.params = params;
}
  constructor() { }

  ngOnInit() {
  }

}
