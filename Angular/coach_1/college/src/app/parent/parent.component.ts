import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  Save(ref:string)
   {
     alert(ref);
    
   }
   

   
  constructor() { }

  ngOnInit() {
  }

}
