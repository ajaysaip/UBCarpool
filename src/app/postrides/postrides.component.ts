import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {PostrideService} from '../postride.service'

@Component({
  selector: 'app-postrides',
  templateUrl: './postrides.component.html',
  styleUrls: ['./postrides.component.css']
})
export class PostridesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router:Router, public postrideservice:PostrideService) { }
id:string;
submitted = false;
vacancyPattern="[1-9]{1}$";
flexPattern="[YN]";
feePattern="^([1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|\.[0-9]{1,2})$";
alphaPattern="^[a-zA-Z_ ]*$";
alphanumeric="^[a-zA-Z0-9_ ]*$";

postrideForm:FormGroup;
  ngOnInit() {
    this.id=localStorage.getItem('token');
    this.id=this.id.split("@")[0];
    this.postrideForm = this.formBuilder.group({
      source: ['', [Validators.required,  Validators.pattern(this.alphaPattern)]],
      destination: ['', [Validators.required,  Validators.pattern(this.alphaPattern)]],
      vacancy: ['', [Validators.required,  Validators.pattern(this.vacancyPattern)]],
      date:['', Validators.required],
      time: ['', Validators.required],
      sflex: ['', [Validators.required,  Validators.pattern(this.flexPattern)]],
      sp: ['', [Validators.required,  Validators.pattern(this.alphanumeric)]],
      ep: ['', [Validators.required,  Validators.pattern(this.alphanumeric)]],
      fee: ['', [Validators.required,  Validators.pattern(this.feePattern)]]
    }); 
  }


  get f() { 
    return this.postrideForm.controls; 
  }


x:any;
  async onSubmit(){



    this.submitted=true;
    if (this.postrideForm.invalid) {
      return;
    }

    this.postrideservice.source=this.postrideForm.controls.source.value;
    this.postrideservice.destination=this.postrideForm.controls.destination.value;
    this.postrideservice.vacancy=this.postrideForm.controls.vacancy.value;
    this.postrideservice.date=this.postrideForm.controls.date.value;
    this.postrideservice.time=this.postrideForm.controls.time.value;
    this.postrideservice.flex=this.postrideForm.controls.sflex.value;
    this.postrideservice.sp=this.postrideForm.controls.sp.value;
    this.postrideservice.ep=this.postrideForm.controls.ep.value;
    this.postrideservice.charge=this.postrideForm.controls.fee.value;
    this.x=await this.postrideservice.post();

    if(this.x===1){
      alert('Ride Posted Successfully!!')
      this.router.navigate(['/view']);

    }
    else{
      alert('Its our fault!! Please post the ride again!')
      this.router.navigate(['/postrides']);
    }

    
  }

}
