import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotService } from '../forgot.service';


@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  registerForm: FormGroup;
    submitted = false;
  constructor(private formBuilder: FormBuilder, private router:Router,public forgotservice:ForgotService) { }
  notSame=false;
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      otp:['',Validators.required],
      pwd: ['', [Validators.required,Validators.minLength(6)]],
      cnfpwd: ['', Validators.required]
  });
  
  }
 




  get f() { return this.registerForm.controls; }

    async onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        let pass = this.registerForm.controls.pwd.value;
        let confirmPass = this.registerForm.controls.cnfpwd.value;
        if(pass!=confirmPass){

          alert("mismatching passwords")
        }
        else{
        this.forgotservice.pwd=this.registerForm.controls.pwd.value;
        console.log(this.forgotservice.code)
        console.log(this.registerForm.controls.otp.value)
        if(this.forgotservice.code===this.registerForm.controls.otp.value){
 
        
        await this.forgotservice.forgot();
        alert('Password Updated Sucessfully! Please Login!!')
        this.router.navigate(["/homepage"]);}
        else{
          alert('verification code is wrong!')
        }}
        
    }
}
