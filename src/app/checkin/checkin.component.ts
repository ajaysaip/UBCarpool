import { Component, OnInit } from '@angular/core';
import { CheckinService } from '../checkin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {
  riderset:boolean; 
  submitted=false;
  driverset:boolean;
  registerForm: FormGroup;
  mobilePattern="^[a-z0-9._%+-]$";
  id:any;
  constructor(public router:Router,private formBuilder: FormBuilder,public checkin:CheckinService) { }

  ngOnInit() {
    this.id=localStorage.getItem('token');
    this.riderset=this.checkin.rideset;
    this.driverset=this.checkin.driveset;

    this.registerForm = this.formBuilder.group({
      mode: ['', Validators.required], 
      
      mobile:['', Validators.required]
      
    });

  }

  f(){
    return this.registerForm.controls; 
  }

  async onSubmit(){
    this.submitted=true;
    if (this.registerForm.invalid) {
      return;
    }
    this.checkin.mode=this.registerForm.controls.mode.value;
    console.log(this.checkin.mode)
    this.checkin.mobile=this.registerForm.controls.mobile.value;
    await this.checkin.payinfo();
    if(this.checkin.result==true){
      alert("You are all set Have a great trip!!")
      
      this.router.navigate(['/profile']);
    }
    else{
      alert("Sorry its our fault!!!")
    }

  }
}
 