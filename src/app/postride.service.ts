import { Injectable } from '@angular/core';
import { Time } from '@angular/common';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostrideService {
x:string;
  source:string;
  destination:string;
  vacancy:string;
  date:Date;
  time:Time;
  flex:string;
  sp:string;
  ep:string;
  charge:string;

  async post(){
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    console.log("in postride.postrideservice")
    await this.http.post("./postrides.php",{src:this.source,dest:this.destination,vacancy:this.vacancy,date:this.date,time:this.time,flex:this.flex,sp:this.sp,ep:this.ep,charge:this.charge,em:localStorage.getItem('token')}).toPromise().then((data:any)=>{

      this.x=data;
      console.log(this.x)
      });

    return this.x;
  }
  



  constructor(private http:HttpClient) { }
}
