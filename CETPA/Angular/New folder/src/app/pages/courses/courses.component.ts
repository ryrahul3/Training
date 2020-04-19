import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  cname;
  constructor(private ar:ActivatedRoute) { }
  ngOnInit() {
    this.ar.params.subscribe(res=>
      {
        this.cname=res.cat;
      })
  }

}
