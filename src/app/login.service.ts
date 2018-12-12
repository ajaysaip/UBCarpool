import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

x:string;
email:string;
password:string;



async authenticate(){
  var headers= new Headers();
  headers.append('Content-Type','application/X-www-form=urlencoded');
  console.log("in authenticate.loginservice")
  await this.http.post("./authenticate.php",{em:this.email,pwd:this.password}).toPromise().then((data:string)=>{if(data=="0"){this.x="0";

}
else {
  this.x="1";
}
});
console.log('happens  before after')
return this.x;

}

  





  constructor(private http:HttpClient) { }
}
