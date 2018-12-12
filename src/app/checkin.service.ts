import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {
result:any;
mobile:string;
mode:string;
id:any;
rideset=false;
driveset=false;
  constructor(private http:HttpClient) { }

  async driverset(){
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');

    await this.http.post("./checkindriver.php",{id:this.id}).toPromise().then((data:any)=>{
 
    this.driveset=data;
    console.log(this.driveset)
    //if data == true then navigate to checkin page for paydetails and then add paydetails to database
    });
  }

  async riderset(){
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');

    await this.http.post("./checkinrider.php",{id:this.id}).toPromise().then((data:any)=>{

    this.rideset=data;
    });
  }

  async payinfo(){
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');

    await this.http.post("./driverpay.php",{id:this.id,mode:this.mode,mobile:this.mobile}).toPromise().then((data:any)=>{

    this.result=data;
    });


  }
}
