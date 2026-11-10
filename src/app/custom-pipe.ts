import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value == '' || value == undefined || value == null) {
      return 'NA';
    } else {
      return value ? '+91 ' + value : value;
    }
  }
}
