import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'college';
  hidden:boolean = false;
  improve:boolean= true;
  button:boolean= false;
  Name:string='Was this article helpful? ';
  hide(){
    this.hidden = true;
    this.button= true;
   this.Name= 'Thank you for your feedback';
     }
     show(){
      this.improve = false;
      this.button=true;
      this.Name= 'Sorry about that';
       }
}
