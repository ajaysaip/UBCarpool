import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { ResponseType } from '@angular/http';
import { text } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class ViewrideService {
email:string;
id:any;
result1:any;
result:Array<any>;
async viewrides(){
  var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    //const params = new HttpParams().set("em", this.email);

    console.log("in viewride.viewrideservice")
    await this.http.post("./viewrides.php",{em:this.email}).toPromise().then((data:any)=>{

    this.result=data;
    console.log(this.result)
    });
}
async deleterides(){
  var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    //const params = new HttpParams().set("em", this.email);

    console.log("in viewride.viewrideservice")
    await this.http.post("./deleterides.php",{id:this.id}).toPromise().then((data:any)=>{

    this.result1=data;
    console.log(this.result1)
    });
}


  constructor(private http:HttpClient) { }
}
