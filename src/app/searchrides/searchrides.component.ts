import { Component, OnInit } from '@angular/core';
import { SearchrideService } from '../searchride.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchrides',
  templateUrl: './searchrides.component.html',
  styleUrls: ['./searchrides.component.css']
})
export class SearchridesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router:Router, public searchrideservice:SearchrideService) { }
  searchrideForm:FormGroup;
  submitted=false; 
  id:string;
  alphaPattern="^[a-zA-Z_ ]*$";


  ngOnInit() {

    this.id=localStorage.getItem('token');
    this.id=this.id.split("@")[0];
    this.searchrideForm = this.formBuilder.group({
      source: ['', [Validators.required,  Validators.pattern(this.alphaPattern)]],
      destination: ['', [Validators.required,  Validators.pattern(this.alphaPattern)]],
      
     
    });
  }


  get f() { 
    return this.searchrideForm.controls; 
  }


x:string;
  async onSubmit(){



    this.submitted=true;
    if (this.searchrideForm.invalid) {
      return;
    }
    this.searchrideservice.email=localStorage.getItem('token');
    this.searchrideservice.sc=this.searchrideForm.controls.source.value;
    this.searchrideservice.ec=this.searchrideForm.controls.destination.value;
    if(this.searchrideForm.controls.date){
    this.searchrideservice.datetravel=this.searchrideForm.controls.date.value;}
    else{
      this.searchrideservice.datetravel=null;
    }
    await this.searchrideservice.searchride();
    this.router.navigate(['/results']);
    
  }

  async onSubmit1(){
    this.searchrideservice.email=localStorage.getItem('token');
    this.searchrideservice.sc="";
    this.searchrideservice.ec="";
    this.searchrideservice.datetravel=null;

    await this.searchrideservice.searchride();
    this.router.navigate(['/results']);
    
  }




}
