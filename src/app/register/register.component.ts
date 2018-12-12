import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { RouterModule, Routes, Router } from '@angular/router';
import * as emailjs from 'emailjs-com';
import { RegisterService } from '../register.service';
import { stringify } from '@angular/core/src/util';




export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl| null, form: FormGroupDirective | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  x:any;
  matcher = new MyErrorStateMatcher();
  registerForm: FormGroup;
  
    submitted = false;
    emailPattern = "^[a-z0-9._%+-]+@(?:[a-z0-9-]+\.)+(edu)$";
    pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
    mobilePattern="[0-9]{10}$";
    
  constructor(private formBuilder: FormBuilder, private router:Router, public regservice:RegisterService) { }

  ngOnInit() {
    
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      
      mobile:['', [Validators.required,  Validators.pattern(this.mobilePattern)]],
      email: ['', [Validators.required,  Validators.pattern(this.emailPattern)]],
      pwd: ['', [Validators.required,Validators.minLength(6)]],
      cnfpwd: ['', Validators.required]
    },{ validator:this.checkPasswords});

    
  }
  
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.pwd.value;
    let confirmPass = group.controls.cnfpwd.value;

  //return pass === confirmPass ? null :  { notSame: true }//
    if(pass !== confirmPass){
      return {
        notSame:true
      }
    }
  }
  get f() { 
    return this.registerForm.controls; 
  }
   onValidate(){
    this.regservice.email=this.registerForm.controls.email.value;
    this.x=this.regservice.validate();
    return this.x;
  } 


  async onSubmit() {
    
    
    this.x=await this.onValidate();
    console.log(this.x)
    this.regservice.fName=this.registerForm.controls.firstName.value;
    this.regservice.lastName=this.registerForm.controls.lastName.value;
    
    this.regservice.mobile=this.registerForm.controls.mobile.value;
    this.regservice.email=this.registerForm.controls.email.value;
    
    
    this.regservice.password=this.registerForm.controls.pwd.value;
    
    
    this.submitted = true;
    //var code=Math.floor((Math.random() * 1000000) + 100000).toString();
    var email=this.registerForm.controls.email.value;
    var to_name=this.registerForm.controls.firstName.value;
    console.log(to_name)
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    console.log("zero")
    if(this.x==="0"){
      alert('EmailId already exists!! Please Login OR Click Forgot Password to reset your Password')
    this.router.navigate(["/homepage"]);

    }

    else{
    
    
    this.regservice.code=Math.floor((Math.random() * 1000000) + 100000).toString();
    console.log(this.regservice.code)
    var template_params = {
     "email": email,
     "to_name": to_name,
     "message_html": this.regservice.code
    }

    console.log(template_params)
    var service_id = "gmail";
    var user_id="user_XadVSwbMcQmt2m3BgoRUE";
    var template_id = "template_BPHbsVUW";
    emailjs.send(service_id,template_id,template_params,user_id);
    alert('Check your Email :-)')
    this.router.navigate(["/confirm"]);}
  }

}
