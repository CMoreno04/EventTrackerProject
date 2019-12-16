import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private authSvc: AuthService, private route: Router) {}
  public isMenuCollapsed = true;
  logged: boolean;
  ngOnInit() {
    this.logged = this.authSvc.checkLogin();
  }
  checkIfLogged() {
    return this.authSvc.checkLogin();
  }
  logout() {
    if (this.authSvc.checkLogin()) {
      this.authSvc.logout();
    } else {
      this.route.navigateByUrl('login');
    }
  }

}
