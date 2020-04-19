import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'substr'
})
export class SubstrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args)
    {
      return value.substr(0,args);
    }
    else
    {
      return value;
    }
  }

}
