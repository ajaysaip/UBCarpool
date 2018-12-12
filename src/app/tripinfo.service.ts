import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripinfoService {
email:string;
  constructor(private http:HttpClient) { } 
  ride:Array<any>;
  drive:Array<any>;
  async tripdetails(){
    var headers= new Headers();
      headers.append('Content-Type','application/X-www-form=urlencoded');
      //const params = new HttpParams().set("em", this.email);
  
      console.log("in tripdetails.tripinfoservice")
      await this.http.post("./tripdetails.php",{em:this.email}).toPromise().then((data:any)=>{
  
      this.ride=data['asrider'];
      this.drive=data['asdriver']; 
      console.log(this.ride)
      
  });
 
  }






}
