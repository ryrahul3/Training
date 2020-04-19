import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

people:any[]=[
{name:"rahul",age:45},
{name:"rahul",age:32},
{name:"rahul",age:10},
{name:"rahul",age:25},]

  constructor() { }

  ngOnInit() {
  }

}
