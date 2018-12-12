import { Component, OnInit } from '@angular/core';
import {ViewrideService} from '../viewride.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewrides',
  templateUrl: './viewrides.component.html',
  styleUrls: ['./viewrides.component.css']
})
export class ViewridesComponent implements OnInit {

  constructor(public router:Router,public viewride:ViewrideService) { }
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

details:any[]=[];
x:any;

  async ngOnInit() {

    this.id=localStorage.getItem('token');
    
    this.viewride.email=this.id;
    await this.viewride.viewrides();
    
    var i=0;
    if(this.viewride.result==null){
      alert("there are no rides posted by you")
      this.router.navigate(['/profile']);
    }
    else{
    while(i<this.viewride.result.length){
    this.details[i]={start:this.viewride.result[i]['Start_city'],
                        end:this.viewride.result[i]['End_city'],
                        vacancy:this.viewride.result[i]['Vacancies'],
                        date:this.viewride.result[i]['Date_travel'],
                        time:this.viewride.result[i]['Time'],
                        sl:this.viewride.result[i]['start_location'],
                        el:this.viewride.result[i]['end_location'],
                        flex:this.viewride.result[i]['Flexibility'],
                        id:this.viewride.result[i]['Ride_id'],
                        charge:this.viewride.result[i]['Charge']  
  
                        

    };
    i=i+1;
  }
}
  console.log(this.details)

 
  }
  async delete(id:any){
    this.viewride.id=id;
    await this.viewride.deleterides();
    this.router.navigate(['/view']);
  }

}
