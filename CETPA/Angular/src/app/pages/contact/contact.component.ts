import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,AbstractControl } from '@angular/forms';
//for custom validation for age range 18 to 45 
function ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
      return { 'ageRange': true };
  }
  return null;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 frm:FormGroup;
  constructor(private fb:FormBuilder) { }
  ngOnInit() {
    this.validate();
    //let xyz={'name':'anuj','mobile':7878787878,'age':34};
    //this.frm.patchValue(xyz);
    //this.frm.controls.name.patchValue("sumit");
  }
  validate()
  {
     this.frm=this.fb.group(
       {
         'name':['',Validators.required],
         'mobile':['',[Validators.required,Validators.pattern("[6-9][0-9]{9}")]],
         'age':['',ageRangeValidator]
       }
     )
  }
}
