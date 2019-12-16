import { FlightService } from './services/flight.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FlightDurationPipe } from './pipes/flight-duration.pipe';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { FlightsComponent } from './components/flights/flights.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { ButtonsModule, WavesModule, IconsModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    NotfoundComponent,
    FlightDurationPipe,
    RegisterComponent,
    FlightsComponent,
    AddFlightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule, ButtonsModule, WavesModule, IconsModule, MDBBootstrapModule
  ],
  providers: [

    FlightService,
    FlightDurationPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
