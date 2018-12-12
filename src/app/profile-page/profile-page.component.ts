import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripinfoService } from '../tripinfo.service';
import { CheckinService } from '../checkin.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(public router:Router,public trip:TripinfoService,public checkin:CheckinService) { }
  id:string;
  driverset=false;
  riderset=false;
  d1:Date;
  d2:Date;
  id1:string;
  
  driver:any[]=[];
  rider:any[]=[];
  async ngOnInit() {
    this.checkin.rideset=false;
    this.checkin.driveset=false;
    this.id=localStorage.getItem('token');
    /* this.id1=this.id;
    this.id=this.id.split("@")[0]; */
    
    this.trip.email=this.id;
    await this.trip.tripdetails();


    //var i=0;
    for(let i in this.trip.ride){  
      
      this.rider[i]={start:this.trip.ride[i]['Start_city'],
                    end:this.trip.ride[i]['End_city'],
                    date:this.trip.ride[i]['Date_travel'],
                    id:this.trip.ride[i]['Ride_id']
  };
    
  }
  var j=0;
  for(let j in this.trip.drive){  
    this.driver[j]={start:this.trip.drive[j]['Start_city'],
                  end:this.trip.drive[j]['End_city'],
                  date:this.trip.drive[j]['Date_travel'],
                  id:this.trip.drive[j]['Ride_id']
};

    
  }
console.log(this.rider)
console.log(this.driver)

  }

  logout(){
    localStorage.setItem('isLoggedIn',"false");
    localStorage.removeItem('token');
    this.router.navigate(['/homepage']);
    
  }
  async checkindriver(id:any){
    
    this.checkin.id=id;
    await this.checkin.driverset();
    if(this.checkin.driveset==true){
    this.checkin.driveset=true;
    this.router.navigate(['/checkin']);
  }
    else{
      alert("Let the rider checkin first!!")
    }
    //make driverset to true
    //check if riderset is true if true from database in payment table
    //if true navigate to 
  } 
  async checkinrider(id:any){
    this.checkin.id=id;
    await this.checkin.riderset();
    this.checkin.rideset=true;
    this.router.navigate(['/checkin']);
    //make riderset to true
    //add to database in payment table 
  }

 
}
