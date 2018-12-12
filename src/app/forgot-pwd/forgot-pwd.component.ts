import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotService } from '../forgot.service';
import * as emailjs from 'emailjs-com';
@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
emailPattern = "^[a-z0-9._%+-]+@(?:[a-z0-9-]+\.)+(edu)$";
constructor(private formBuilder: FormBuilder, private router:Router,public forgotservice:ForgotService) { }

ngOnInit() {
  this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required,  Validators.pattern(this.emailPattern)]]
    
});
}

get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      var email=this.registerForm.controls.email.value;
      this.forgotservice.email=this.registerForm.controls.email.value;
      var to_name="";
      this.forgotservice.code=Math.floor((Math.random() * 1000000) + 100000).toString();
      console.log(this.forgotservice.code)
      var template_params = {
        "email": email,
        "to_name": to_name,
        "message_html": this.forgotservice.code
       }
   
       console.log(template_params)
       var service_id = "default_service";
       var user_id="user_XadVSwbMcQmt2m3BgoRUE";
       var template_id = "template_BPHbsVUW";
       emailjs.send(service_id,template_id,template_params,user_id);

      alert('Check your mail for verification code!')
      this.router.navigate(["/changepwd"]);
      
  }
}