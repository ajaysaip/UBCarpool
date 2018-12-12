import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchrideService {
  email:string;
  sc:string;
  ec:string;
  datetravel:Date;

result:Array<any>;


  async searchride(){
    var headers= new Headers();
      headers.append('Content-Type','application/X-www-form=urlencoded');
      //const params = new HttpParams().set("em", this.email);
  
      console.log("in searchride.searchrideservice")
      await this.http.post("./searchrides.php",{sc:this.sc,ec:this.ec,dat:this.datetravel,em:this.email}).toPromise().then((data:any)=>{
  
      this.result=data;
      
  });

  }




  constructor(private http:HttpClient) { }
}
