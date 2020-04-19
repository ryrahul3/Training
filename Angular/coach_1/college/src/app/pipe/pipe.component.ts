import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {


  Name:string='Rahul yadav';
  Salary:number= 33451.193939303033039;
  dt=new Date();
  obj={name:'rah',email:'A@g.com'};
  constructor() { }

  ngOnInit() {
  }

}
