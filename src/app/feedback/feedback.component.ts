import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripfeedbackService } from '../tripfeedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;
  submitted = false;
  show=false;
emailPattern = "^[a-z0-9._%+-]+@(?:[a-z0-9-]+\.)+(edu)$";
alphanumeric="^[a-zA-Z0-9_ ]*$";
scorePattern="[0-5]{1}$";
id:any;
constructor(private formBuilder: FormBuilder, private router:Router, public feedservice:TripfeedbackService) { }
driver:any[]=[];
rider:any[]=[];
async ngOnInit() {
  this.id=localStorage.getItem('token');
  this.feedservice.email=this.id;
  this.feedbackForm = this.formBuilder.group({
    
    score: ['', [Validators.required,  Validators.pattern(this.scorePattern)]],
    comment:['', Validators.pattern(this.alphanumeric)]
    
});
await this.feedservice.tripdetails();

for(let i in this.feedservice.ride){   
      
  this.rider[i]={start:this.feedservice.ride[i]['Start_city'],
                end:this.feedservice.ride[i]['End_city'],
                date:this.feedservice.ride[i]['Date_travel'],
                id:this.feedservice.ride[i]['Ride_id']
};

}
var j=0;
for(let j in this.feedservice.drive){  
this.driver[j]={start:this.feedservice.drive[j]['Start_city'],
              end:this.feedservice.drive[j]['End_city'],
              date:this.feedservice.drive[j]['Date_travel'],
              id:this.feedservice.drive[j]['Ride_id']
};


}




}

tripfeedback(){
  this.show=true;
}

get f() { return this.feedbackForm.controls; }

 async onSubmit(id:any) {
      this.submitted = true;
      if (this.feedbackForm.invalid) {
        return;
      }

      this.feedservice.id=id;
      console.log(this.feedservice.id)
      this.feedservice.score=this.feedbackForm.controls.score.value;
      this.feedservice.comments=this.feedbackForm.controls.comment.value;
      await this.feedservice.feedback();
      alert("Thanks for feedback")
      this.show=false;
      //this.router.navigate(['/profile']);

}}
