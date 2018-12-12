import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { Router,Route } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  emailPattern = "^[a-z0-9._%+-]+@(?:[a-z0-9-]+\.)+(edu)$";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  registerForm: FormGroup;
    submitted = false;
  constructor(private formBuilder: FormBuilder, private router:Router,public loginservice:LoginService ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      
      email: ['', [Validators.required,  Validators.pattern(this.emailPattern)]],
      pwd: ['', [Validators.required,Validators.minLength(6)]],
      
  });

  } get f() { return this.registerForm.controls; }

  x:any;
  onValidate(){
    this.loginservice.email=this.registerForm.controls.email.value;
    this.loginservice.password=this.registerForm.controls.pwd.value;
    this.x=this.loginservice.authenticate();
    return this.x;
  } 
    
   async onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.x=await this.onValidate();

      if(this.x==="0"){
        alert("Invalid Credentials!! Please enter valid emailid and password")
      }
      else{
      localStorage.setItem('isLoggedIn',"true");
      localStorage.setItem('token',this.registerForm.controls.email.value);
      alert('SUCCESS!! :-)') 
      this.router.navigate(["/profile"]);}
      
      
  }
}
