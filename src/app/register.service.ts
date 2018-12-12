import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';




import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  x:string;
    
  code:string;
  
  
    fName:string;
    lastName:string;
    gender:string;
    
    type:string;
    mobile:string;
    email:string;
    password:string;
  
  //data1:string;
  c:string;
  
  /**
   * register
   */
  async register() {
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    console.log("in register.registerservice")
    await this.http.post("./register.php",{fname:this.fName,lname:this.lastName,mob:this.mobile,em:this.email,pwd:this.password}).toPromise().then((data1:string)=>{if(data1=="0"){this.c="0";
  
  }
  else {
    this.c="1";
  }
});
  console.log('registration done')
  console.log(this.c)
  return this.c;
    }
  
    data:string;
  /**
   * validate 
   */
  async validate(){
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    console.log("in validate.registerservice")
    await this.http.post("./validate.php",{em:this.email}).toPromise().then((data:string)=>{if(data=="0"){this.x="0";
  
  }
  else {
    this.x="1";
  }
});
  console.log('happens  before after')
  return this.x;
    
      
    
    
    
  
  }
    
  
  constructor(private http:HttpClient) {
    
    
     }

  
     
     
   
}
