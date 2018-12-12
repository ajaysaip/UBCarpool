import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {
code:string;
pwd:string;
email:string;
x:string;
  constructor(private http:HttpClient) { }


async forgot(){
  var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    //const params = new HttpParams().set("em", this.email);

    console.log("in viewride.viewrideservice")
    console.log(this.code)
    console.log(this.pwd)
    await this.http.post("./forgot.php",{em:this.email,pwd:this.pwd}).toPromise().then((data:string)=>{
      this.x=data;
      console.log(this.x)
    });
}
}
