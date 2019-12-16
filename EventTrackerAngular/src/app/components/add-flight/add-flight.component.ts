import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  flight = new Flight();

  constructor(
    private FlightSvc: FlightService,
    private routes: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {}

  createFlight(newFlight: Flight) {
    this.FlightSvc.create(newFlight).subscribe(
      data => {
        console.log(data);
        this.route.navigateByUrl('flight');
        this.flight = new Flight();
      },
      err => {
        console.log(err);
      }
    );
  }
}
