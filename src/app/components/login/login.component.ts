import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timeOffService } from './shared/timeOffService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginLabel: any = ["Employee ID"];
  message: string;
  data: any = [];
  getEmpInfo: any;
  loginForm: FormGroup;

  constructor(private loginService: timeOffService, private router: Router, private _fb: FormBuilder) {
    this.loginForm = this._fb.group({
      idType: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  idTypeList: any = ["Employee ID", "Soc. Sec. # (US only)", "Custom ID"];

  loginUser() {
    this.getEmpInfo.map(ele=>{
      (this.loginForm.controls['idType'].value.toLowerCase() == ele.emp && this.loginForm.controls['password'].value.toLowerCase() == ele.pwd) ? this.router.navigate(['/home']) : this.message = "ID or password is invalid";
   });
  }

  onSelectList(list) {
    this.loginLabel = list;
  }

  ngOnInit() {
    this.loginService.getEmpData().subscribe(data => {
      this.getEmpInfo = data;
    })
    this.message = "";
    this.loginForm.controls['idType'].valueChanges.subscribe(id => {
      if(id) {
        this.message = "";
      }
    })
    this.loginForm.controls['password'].valueChanges.subscribe(pwd => {
      if(pwd) {
        this.message = "";
      }
    })
  }
}
