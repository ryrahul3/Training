import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  IsValid:boolean=false;
  // ChangeValue(value:boolean):boolean
  // {
  //   this.IsValid=IsValid ;
  // }
  constructor() { }

  ngOnInit() {
  }

}
