import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from '../models/flight';

@Pipe({
  name: 'flightDuration'
})
export class FlightDurationPipe implements PipeTransform {
  transform(flight: Flight): string {

    const departureDate = new Date(flight.departureTime);
    const arrivalDate = new Date(flight.arrivalTime);

    const diff = Math.abs(departureDate.getTime() - arrivalDate.getTime());
    const days = Math.floor(diff / (60 * 60 * 24 * 1000));
    const hours = Math.floor(diff / (60 * 60 * 1000)) - days * 24;
    const minutes =
      Math.floor(diff / (60 * 1000)) - (days * 24 * 60 + hours * 60);
    const seconds =
      Math.floor(diff / 1000) -
      (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60);

    if (hours === 0) {
      return  days + ' days';
    } else if (minutes < 5) {
      return  days + ' days with ' + hours + ' hours';
    } else if (seconds === 0) {
      return  days + ' days with ' + hours + 'hours and ' + minutes + ' minutes';
    } else {
      return (
        days + ' days with ' + hours + 'hours and ' + minutes + ' minutes with ' +
        seconds + ' seconds'
      );
    }

  }
}
