import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
  }
validate(){
  this.contactForm= this._fb.group(
    {
      'name':['',Validators.required],
      'mobile':['',[Validators.required,Validators.pattern("[6-9][0-9]{9}")]],
      'age':['',[Validators.max(65),Validators.min(18)]]
    }
  )
}
}
