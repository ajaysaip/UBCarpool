import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripfeedbackService {

  email:string;
  id:any;
  result:any;
  constructor(private http:HttpClient) { } 
  ride:Array<any>;
  drive:Array<any>;
  score:any;
  comments:any;
  async tripdetails(){
    var headers= new Headers();
      headers.append('Content-Type','application/X-www-form=urlencoded');
      //const params = new HttpParams().set("em", this.email);
  
      console.log("in tripdetails.tripfeedback")
      await this.http.post("./tripstatus.php",{em:this.email}).toPromise().then((data:any)=>{
  
      this.ride=data['asrider'];
      this.drive=data['asdriver'];
      console.log(this.ride)
      console.log(this.drive)
      
  });

  }
  async feedback(){
    var headers= new Headers();
      headers.append('Content-Type','application/X-www-form=urlencoded');
      //const params = new HttpParams().set("em", this.email);
  
      console.log("in tripdetails.tripfeedback")
      await this.http.post("./tripfeedback.php",{em:this.email,id:this.id,score:this.score,comments:this.comments}).toPromise().then((data:any)=>{
  
      this.result=data;
      console.log(this.result)
      
  });

  }
}
