import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'age'})
export class AgePipe implements PipeTransform {
  transform(date: Date): string {
    if(typeof date === 'string'){
      date = new Date(date + 'T00:00:00');
    }
    let timeDiff = Math.abs(Date.now() - date.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    return age + " anos";
  }
}