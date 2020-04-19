import {Pipe,PipeTransform } from '@angular/core';


@Pipe({
 name:'ry'
})
export class ryComponent implements PipeTransform {
transform(Value:String)
{
  return  Value+" ry";
}


}
