import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-sibling',
  templateUrl: './child-sibling.component.html',
  styleUrls: ['./child-sibling.component.css']
})
export class ChildSiblingComponent implements OnInit {
  msg1:string="bhai kya haal";
  constructor() { }

  ngOnInit() {
  }

}
