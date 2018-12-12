import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportrides',
  templateUrl: './reportrides.component.html',
  styleUrls: ['./reportrides.component.css']
})
export class ReportridesComponent implements OnInit {

  constructor() { }
id:any;
  ngOnInit() {
    this.id=localStorage.getItem('token');
    this.id=this.id.split("@")[0];
  }

}
