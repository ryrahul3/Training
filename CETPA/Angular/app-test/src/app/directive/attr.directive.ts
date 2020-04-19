import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
@HostBinding('style.color') myColor:string;
@HostBinding('style.border') myborder:string;
@HostListener('mouseover') onmouseover()
{
  this.myColor ='red';
}

}
