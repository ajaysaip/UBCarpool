import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmrideService } from '../confirmride.service';


@Component({
  selector: 'app-confirmride',
  templateUrl: './confirmride.component.html',
  styleUrls: ['./confirmride.component.css']
})
export class ConfirmrideComponent implements OnInit {
  confirmForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router:Router,public confirmride:ConfirmrideService) { }
id:any;
  ngOnInit() {
    this.id=localStorage.getItem('token');

  
    

     this.confirmForm = this.formBuilder.group({
      passenger:'',
      
      email_1:'',
      email_2:'',
      email_3:'',
      email_4:'',
      email_5:'',
      email_6:''
      
      
      

      
  }); 
  
  
}
get f() { 
  return this.confirmForm.controls; 
}

items:any[]=[];
emailarr:string[]=[];

public dynamic(){
  var i=0;
  if(this.confirmForm.controls.passenger.value>(this.confirmride.vacancy-1)){
    alert("Passengers are more than available vacancy")
  }
 else{
    //this.confirmride.passen=this.confirmForm.controls.passenger.value + 1;
  console.log(this.confirmForm.controls.passenger.value)
  if(this.confirmForm.controls.passenger.value>=1){

    for(i=0;i<this.confirmForm.controls.passenger.value;i++){
      this.items[i]=i+1;
       
    }


  }
}
}
//emails:string[]=[];
email:string;
onSubmit(){
  if(this.confirmForm.controls.passenger.value>(this.confirmride.vacancy-1)){
    alert("Passengers are more than available vacancy")
  }
  
  else{
  var i=0;
  this.confirmride.passen=this.confirmForm.controls.passenger.value + 1;
  this.confirmride.email=localStorage.getItem('token');
  
  console.log(this.confirmride.email)
  console.log(this.confirmForm.controls.passenger.value)
  

    this.confirmride.emails.push(this.confirmride.email);
    this.confirmride.emails.push(this.confirmForm.controls.email_1.value);
    this.confirmride.emails.push(this.confirmForm.controls.email_2.value);
    this.confirmride.emails.push(this.confirmForm.controls.email_3.value);
    this.confirmride.emails.push(this.confirmForm.controls.email_4.value);
    this.confirmride.emails.push(this.confirmForm.controls.email_5.value);
    this.confirmride.emails.push(this.confirmForm.controls.email_6.value);
 
    this.router.navigate(['/pay']);
  
  //take an array and add all email values to the array
 
}
}

}