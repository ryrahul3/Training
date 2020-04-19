import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[ifStr]'
})
export class StrDirective {
  constructor(private vref:ViewContainerRef,private tref:TemplateRef<any>) { }
  @Input() set ifStr(val:boolean)
  {
     if(val)
     {
       this.vref.createEmbeddedView(this.tref);
     }
     else
     {
       this.vref.clear();
     }
  }

}
