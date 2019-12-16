export class Flight {
  id: number;
  airline: string;
  flightNumber: number;
  departureLocation: string;
  arrivalLocation: string;
  departureTime: string;
  arrivalTime: string;
  numberPassengers: number;
  arrived: boolean;

  constructor(
    id?: number,
    airline?: string,
    flightNumber?: number,
    departureLocation?: string,
    arrivalLocation?: string,
    departureTime?: string,
    arrivalTime?: string,
    numberPassengers?: number,
    arrived?: boolean
  ) {
    this.id = id;
    this.airline = airline;
    this.flightNumber = flightNumber;
    this.departureLocation = departureLocation;
    this.arrivalLocation = arrivalLocation;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
    this.numberPassengers = numberPassengers;
    this.arrived = arrived;
  }
}
