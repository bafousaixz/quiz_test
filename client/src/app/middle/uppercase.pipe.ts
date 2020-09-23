import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upfirst'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if(!value) return value
    return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase()
  }

}
