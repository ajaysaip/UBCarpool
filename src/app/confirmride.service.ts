import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmrideService {
  emails:any[]=[];
  passen:number;
  id:string;
  status:string;
driver:any[]=[];
passenger:any[]=[];
details:any[]=[];
result1:any[]=[]; 
result2:any;
email:string;
charge:number;
vacancy:any;
  async getRideDetails(){
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    
    console.log(this.id)
    console.log(this.email)
    console.log(this.passen)
    console.log("in getridedetails.confirmrideservice")
    await this.http.post("./getridedetails.php",{em:this.email,id:this.id}).toPromise().then((data:any)=>{

    this.passenger=data[0];
    this.driver=data[1];
    this.details=data[2];
    console.log(this.driver)
    console.log(this.passenger)
    console.log(this.details)
    });

  }

  async confirmRide(){
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    

    console.log("in confirmride.confirmrideservice")
    await this.http.post("./confirmride.php",{em:this.email,id:this.id,vac:this.passen}).toPromise().then((data:any)=>{

    this.result1=data;
    console.log(this.result1)
    });
  }

  async updateVacancy(){
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    

    console.log("in updatevacancy.confirmrideservice")
    await this.http.post("./updatevacancy.php",{id:this.id,pass:this.passen}).toPromise().then((data:any)=>{

    this.result1=data;
    console.log(this.result1)
    });

  }
  async paydetails(){
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    

    console.log("in updatevacancy.confirmrideservice")
    await this.http.post("./payments.php",{id:this.id,em:this.email,status:this.status,charge:this.charge}).toPromise().then((data:any)=>{

    this.result2=data;
    console.log(this.result2)
    });

  }





  constructor(private http:HttpClient) { }
}
