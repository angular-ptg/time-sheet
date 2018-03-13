import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ts-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  @Input() labelname;
  @Input() labelstyles;
  constructor() { }

  ngOnInit() {
  }

}
