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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    NotfoundComponent,
    FlightDurationPipe,
    RegisterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlightService,
    FlightDurationPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
