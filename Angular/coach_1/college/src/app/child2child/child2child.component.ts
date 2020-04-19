import { Component, OnInit ,ViewChild} from '@angular/core';
import {ChildSiblingComponent} from "../child-sibling/child-sibling.component"
@Component({
  selector: 'app-child2child',
  templateUrl: './child2child.component.html',
  styleUrls: ['./child2child.component.css']
})
export class Child2childComponent implements OnInit {

child2msg:string;
@ViewChild(ChildSiblingComponent) pi;
GetInfo()
{
  this.child2msg=this.pi.msg1;
}


  constructor() { }

  ngOnInit() {
  }

}
