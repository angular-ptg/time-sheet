import { Component, Input } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import { Router } from '@angular/router';
import { DateService } from './shared/services/date.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public translate: TranslateService, private _route: Router, public dateService: DateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en-US');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
   translate.use('en-US');
   this.dateService.showNavMenu = false;
  }

}
