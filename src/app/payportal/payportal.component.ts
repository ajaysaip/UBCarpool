import { Component, OnInit } from '@angular/core';
import { NgxBraintreeModule } from 'ngx-braintree';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { ConfirmrideService } from '../confirmride.service';


@Component({
  selector: 'app-payportal',
  templateUrl: './payportal.component.html',
  styleUrls: ['./payportal.component.css']
})
export class PayportalComponent implements OnInit {
 
  constructor(public braintree:NgxBraintreeModule,private http:HttpClientModule,public router:Router,public confirm:ConfirmrideService) { }


  paymentResponse: any;
  charge:number;
  
  chargeAmount:number;
  

    ngOnInit() {
     if(this.confirm.passen===2){
      this.charge=((this.confirm.charge)-(0.05*this.confirm.charge))*(this.confirm.passen);
    }
    else if(this.confirm.passen>2){
      this.charge=((this.confirm.charge)-(0.1*this.confirm.charge))*(this.confirm.passen);
    }
    else{ 
      this.charge=(this.confirm.charge)*(this.confirm.passen);
    } 
    
      this.chargeAmount=Math.round(this.charge);
    console.log(this.chargeAmount)
  }

  onPaymentStatus(response): void {
    this.paymentResponse = response;
    console.log(this.paymentResponse)
    console.log(response['response']['success'])

    if(response['response']['success']===true){
      this.confirm.status=response['response']['success'];
    this.router.navigate(['/success']);}
    else{
      alert("payment unsuccessful")
    }
  }

}
