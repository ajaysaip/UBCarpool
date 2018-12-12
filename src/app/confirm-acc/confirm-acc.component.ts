import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-confirm-acc',
  templateUrl: './confirm-acc.component.html',
  styleUrls: ['./confirm-acc.component.css']
})
export class ConfirmAccComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
  
  constructor(private formBuilder: FormBuilder, private router:Router, public regser:RegisterService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      otp: ['', Validators.required]
      
  });
  }

  
  get f() { return this.registerForm.controls; }

    async onSubmit() {
        this.submitted = true;
        
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        
        if(this.registerForm.controls.otp.value===this.regser.code){

          await this.regser.register();
        if(this.regser.c==="1"){alert('Your account is registered!! Please Login now')
        
        this.router.navigate(["/homepage"]);}
        }
        else{
          alert('otp is incorrect')
        }

    }
  }


