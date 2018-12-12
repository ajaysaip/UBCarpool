import { Component, OnInit } from '@angular/core';
import { SearchrideService } from '../searchride.service';
import { ConfirmrideService } from '../confirmride.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {


  id:string;
  start_city:Array<string>;
  end_city:Array<string>;
  vacancies:Array<string>;
  date:Array<string>;
  time:Array<string>;
  start_location:Array<string>;
  end_location:Array<string>;
  charge:Array<string>;
  flexibility:Array<string>;
  flag:boolean;
  c:any;

details:any[]=[];
  constructor(public searchrideservice:SearchrideService,public confirmride:ConfirmrideService,private router:Router) { }

  async ngOnInit() {
    this.id=localStorage.getItem('token');
    this.id=this.id.split("@")[0];

    await this.searchrideservice.searchride();
    /* this.start_city=this.viewride.details->start;
    this.x=this.start_city;
    console.log(this.x)
    this.end_city=this.viewride.end_city;
    this.vacancies=this.viewride.vacancies; 
    this.date=this.viewride.date;
    this.time=this.viewride.time;
    this.start_location=this.viewride.start_location;
    this.end_location=this.viewride.end_location;
    this.charge=this.viewride.flexibility;
    this.flexibility=this.viewride.charge;  */
    var i=0;
    if(this.searchrideservice.result==null){
      this.flag=true;
    }
    else{
      try{
        this.c=this.searchrideservice.result.length;
      }
      catch(error){
        this.flag=true;
      }
      
    while(i<this.c){
    this.details[i]={start:this.searchrideservice.result[i]['Start_city'],
                        end:this.searchrideservice.result[i]['End_city'],
                        vacancy:this.searchrideservice.result[i]['Vacancies'],
                        date:this.searchrideservice.result[i]['Date_travel'],
                        time:this.searchrideservice.result[i]['Time'],
                        sl:this.searchrideservice.result[i]['start_location'],
                        el:this.searchrideservice.result[i]['end_location'],
                        flex:this.searchrideservice.result[i]['Flexibility'],
                        id:this.searchrideservice.result[i]['Ride_id'],
                        charge:parseInt(this.searchrideservice.result[i]['Charge'],10)+(0.25*parseInt(this.searchrideservice.result[i]['Charge'],10))+0.30+(0.029*parseInt(this.searchrideservice.result[i]['Charge'],10))
  
                         

    };
    i=i+1;
  }}
  console.log(this.details)
   

  }

  confirm(id:string,charge:any,vacancy:any){
    //store values of the ride and assign to service variables//
    this.confirmride.id=id;
    this.confirmride.charge=charge;
    this.confirmride.vacancy=vacancy;
    console.log(this.confirmride.id)
    this.router.navigate(['/confirmride']);

  }

}
