import { Component, OnInit } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { HttpClientModule } from '@angular/common/http';
import { SuccessService } from '../success.service';
import { ConfirmrideService } from '../confirmride.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private http:HttpClientModule,public sucser:SuccessService,public conser:ConfirmrideService) { }
rider_details:any[]=[];
ride_details:any[]=[];
psn:any;
id:any;
  async ngOnInit() {
//get confirmrideid from confirm service. use that to get corresponding userid and get email//
//php needed//
//send emails create email templates//
//feedback//
//done//
this.id=localStorage.getItem('token');
this.id=this.id.split("@")[0];
await this.conser.confirmRide();
await this.conser.updateVacancy();
await this.conser.getRideDetails();
await this.conser.paydetails();


var i=0;
    while(i<this.conser.driver.length){
    this.rider_details[i]={rider_fname:this.conser.driver[i]['First_name'],
                        rider_lname:this.conser.driver[i]['Last_name'],
                        mobile:this.conser.driver[i]['Mobile'],
                        email:this.conser.driver[i]['Email_id']
    };
    i=i+1;
  }
  var j=0;
  while(j<this.conser.driver.length){
  this.ride_details[i]={start_city:this.conser.driver[i]['Start_city'],
                      start_location:this.conser.driver[i]['start_location'],
                      end_city:this.conser.driver[i]['End_city'],
                      end_location:this.conser.driver[i]['end_location'],
                      date:this.conser.driver[i]['Date_travel'],
                      time:this.conser.driver[i]['Time']

  };
  j=j+1;
}
var msg="Details of Rider    Name:"+this.conser.passenger[0]['First_Name']+"  "+this.conser.passenger[0]['Last_Name']+" Mobile:"+this.conser.passenger[0]['Mobile']+" Email:"+this.conser.passenger[0]['Email_id'];
 var template_params = {
  "email": this.conser.driver[0]['Email_id'],
  "to_name": this.conser.driver[0]['First_name'],
  "message_html": msg
 }

 console.log(template_params)
 var service_id = "gmail";
 var user_id="user_XadVSwbMcQmt2m3BgoRUE";
 var template_id = "ride_details_template";
 emailjs.send(service_id,template_id,template_params,user_id); 
 

var x=0;

this.psn="passenger";
for(x=0;x<this.conser.emails.length;x++){

  var msg="Details of Driver   Name:"+this.conser.driver[0]['First_Name']+"  "+this.conser.driver[0]['Last_Name']+" Mobile:"+this.conser.driver[0]['Mobile']+" Email:"+this.conser.driver[0]['Email_id']+"  Ride Details:: Start City:"+ this.conser.details[0]['Start_city']+"Start location:"+this.conser.details[0]['start_location'] +" End_city:"+ this.conser.details[0]['End_City']+" End_location:"+ this.conser.details[0]['end_location']+" Date:"+ this.conser.details[0]['Date_travel']+" Time:"+this.conser.details[0]['Time'] ;
  
  if(this.conser.emails[x]!=""){
  var template_params = {
   "email": this.conser.emails[x],
   "to_name": this.psn,
   "message_html": msg
  }
 
  console.log(template_params)
  var service_id = "gmail";
  var user_id="user_XadVSwbMcQmt2m3BgoRUE";
  var template_id = "ride_details_template";
  emailjs.send(service_id,template_id,template_params,user_id); }
  

}




  }

}
