import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cetpa Infotech';
  courses=['php','angular','node','mongodb'];
  data:any;
  imagePath="---";
  abc()
  {
    this.data=[
      {'name':'anuj','age':35},
      {'name':'amit','age':25},
      {'name':'anil','age':45},
    ]
  }
}
