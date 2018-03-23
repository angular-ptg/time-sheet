// import { Component, OnInit } from '@angular/core';
// import { AppComponent } from '../../app.component';
// import { Router } from '@angular/router';
// import { DateService } from '../../shared/services/date.service';
// import * as $ from 'jquery';
// import 'fullcalendar';

// @Component({
//   selector: 'app-calendar',
//   templateUrl: './calendar.component.html',
//   styleUrls: ['./calendar.component.css']
// })

// export class CalendarComponent implements OnInit {

//   public value: Date = new Date(2018, 3, 11);
//   public holidays: Date[] = [new Date(2018, 1, 27), new Date(2018, 3, 24)];
//   vm = this;
//   calendar = $('#calendar').fullCalendar('getCalendar');
//   constructor(private _appComponent: AppComponent, private _router: Router, private _dateService: DateService ) { }

//   ngOnInit() {
//     console.log(this.holidays);
//     console.log(this.holidays[0].getFullYear() + '/' + this.holidays[0].getMonth() + '/' + this.holidays[0].getDate());
//     this._appComponent.showNavMenu = true;
//     $('#calendar').fullCalendar({
//       // weekends: false
//       // put your options and callbacks here
//       events: [
//         {
//           title  : 'event1',
//           start  : '2018-03-01'
//         },
//         {
//           title  : 'event2',
//           start  : '2018-03-04',
//           color: 'red'
//         },
//         {
//           title  : 'event3',
//           start  : '2018-03-09',
//           color: 'blue'
//         },
//         {
//           title  : 'event4',
//           start  : '2018-03-09',
//           color: 'green'
//         },
//         {
//           title  : 'event5',
//           start  : '2018-03-19',
//           color: 'yellow'
//         }
//       ],
//       dayClick: function(date) {
//         this._router.navigateByUrl('/reportTime');
//         this._dateService.date = date;
//       }
//     });
//   }

//   // On changing the date
//     public  ReportTime(date: Date) {
//     this._router.navigateByUrl('/reportTime');
//     this._dateService.date = date;
//   }

//   // public isMeeting(date: Date) {
//   //   return /10|15|20/.test(date.getDate()) ? 'meeting' : '';
//   // }

//   public isHoliday(date: Date) {
//     return 'holiday';
//     // return date.getFullYear() + '/'+(date.getMonth()) + '/' + date.getDate() == "2018/3/27" ? 'holiday' : ''
//   }

//   // checkInArray(date) {
//   //   return this.holidays.indexOf(date)
//   // }

// }


import { Component, AfterViewInit, ElementRef } from '@angular/core';

import * as jQuery from 'jquery';
import 'fullcalendar';
import { DateService } from '../../shared/services/date.service';
import { Router } from '@angular/router';

@Component({
    template: '<ng-content></ng-content>',
    selector: 'app-calendar'
})
export class CalendarComponent implements AfterViewInit {
    calendarElement: any;
    clickedDate: any;
    constructor(private elementRef: ElementRef,
                private _dateService: DateService,
                private _router: Router) { }

    ngAfterViewInit() {
        this._dateService.showNavMenu = true;
        this.calendarElement = jQuery(this.elementRef.nativeElement);
        this.calendarElement.fullCalendar({
            events: '/assets/json/events.json',
                      dayClick: (date) => {         
                        this._router.navigateByUrl('/reportTime/' + date.format());
                    }
        });
      }
}
