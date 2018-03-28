import { Component, OnInit } from '@angular/core';
import { ClientInfoService } from '../shared/client-info.service';

@Component({
  selector: 'ts-client-information',
  templateUrl: './client-information.component.html',
  styleUrls: ['./client-information.component.css']
})
export class ClientInformationComponent implements OnInit {

  clientInfo: any ;

  textFormat:string = "textFormat";
  constructor(private _clientInfoService: ClientInfoService) { }

  ngOnInit() {
    this._clientInfoService.getClientInfo().subscribe(data => {
      this.clientInfo = data[0];
      this.clientInfo = Object.values(this.clientInfo);
      console.log(this.clientInfo);
    }, error => {
      console.log(error);
    })
  }
}
