import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitto'
})
export class LimittoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }
}
