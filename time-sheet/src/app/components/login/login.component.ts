import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timeOffService } from './shared/timeOffService';
import { AppComponent } from '../../app.component';
import { DateService } from '../../shared/services/date.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginLabel: any = ['User ID'];
  message: string;
  data: any = [];
  getEmpInfo: any;
  loginForm: FormGroup;
  empData: any=[];
  constructor(private loginService: timeOffService,
              private router: Router,
              private _fb: FormBuilder,
              private _apComponent: AppComponent, 
              private _dateService: DateService) {
                this.loginService.getEmpData().subscribe(data =>{
                  this.empData =Object.values(data[0]);
                });
    this.loginForm = this._fb.group({
      idType: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this._dateService.showNavMenu = false;
  }

  idTypeList: any = ['Employee ID', 'Soc. Sec. # (US only)', 'Custom ID'];

  loginUser() {
  if((this.loginForm.controls['idType'].value.toLowerCase() === this.empData[0].empId) && (this.loginForm.controls['password'].value.toLowerCase() === this.empData[0].pwd)) {
    this.router.navigate(['/dashboard']);
     this._dateService.showNavMenu = true;
     return;
  }
  else{
    this.message = 'ID or password is invalid'
  }
  if((this.loginForm.controls['idType'].value.toLowerCase() === this.empData[1].empId) && (this.loginForm.controls['password'].value.toLowerCase() === this.empData[1].pwd)){
    this.router.navigate(['/reportDetails']);
    this._dateService.showNavMenu = true;
    this._dateService.managerNavMenu = true;
    return;
  }else{
    this.message = 'ID or password is invalid'
  } 
    
  }

  onSelectList(list) {
    this.loginLabel = list;
  }

  ngOnInit() {
    this.loginService.getEmpData().subscribe(data => {
      this.getEmpInfo = data;
    });
    this.message = '';
    this.loginForm.controls['idType'].valueChanges.subscribe(id => {
      if (id) {
        this.message = '';
      }
    });
    this.loginForm.controls['password'].valueChanges.subscribe(pwd => {
      if (pwd) {
        this.message = '';
      }
    });
  }
}
