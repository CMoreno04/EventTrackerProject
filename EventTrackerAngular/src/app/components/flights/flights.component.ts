import { FlightDurationPipe } from './../../pipes/flight-duration.pipe';
import { Flight } from './../../models/flight';
import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  // F I E L D S

  title = 'Your Flights';

  editFlight = null;

  newFlight = new Flight();

  flight = new Flight();

  flights: Flight[] = [];

  selected = null;

  showComplete = false;



  // C O N S T R U C T O R

  constructor(
    private FlightSvc: FlightService,
    private flightDuration: FlightDurationPipe,
    private routes: ActivatedRoute,
    private route: Router
  ) {}

  // M E T H O D S
  badgeColor() {
    const count = this.getNumFlights();

    if (count >= 10) {
      return 'badge-danger';
    }
    if (count >= 5) {
      return 'badge-warning';
    } else {
      return 'badge-success';
    }
  }

  getNumFlights(): number {
    return this.flights.length;
  }

  setSelected(flight: Flight) {
    this.selected = flight;
    this.editFlight = Object.assign({}, this.selected);
  }

  update(t: Flight) {
    console.log(t);
    this.FlightSvc.update(t, t.id).subscribe(
      data => {
        console.log(data);
        this.reload();
        this.editFlight = null;
        this.selected = null;
      },
      err => {
        console.log(err);
      }
    );
  }

  delTask(id: number) {
    this.FlightSvc.delete(id).subscribe(
      data => {
        console.log(data);
        this.reload();
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    if (!this.selected && this.routes.snapshot.paramMap.get('id')) {
      return this.FlightSvc.show(
        this.routes.snapshot.paramMap.get('id')
      ).subscribe(
        data => {
          console.log(data);
          this.selected = data;
          this.flights.push(this.selected);
        },
        err => {
          console.log(err);
          this.route.navigateByUrl('notfound');
        }
      );
    } else {
      return this.reload();
    }
  }

  addFlightFlight() {
    this.newFlight.arrived = false;
    this.FlightSvc.create(this.newFlight).subscribe(
      data => {
        console.log(data);
        this.reload();
        this.newFlight = new Flight();
      },
      err => {
        console.log(err);
      }
    );
  }

  reload() {
    this.FlightSvc.index().subscribe(
      data => {
        console.log(data);
        this.flights = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
