import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flightDuration'
})
export class FlightDurationPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
