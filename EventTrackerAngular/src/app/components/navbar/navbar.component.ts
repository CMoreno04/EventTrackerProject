import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private authSvc: AuthService, private route: Router) { }
  public logged: boolean;
  public is: false;
  ngOnInit() {
    this.logged = this.authSvc.checkLogin();
  }
  isCollapsed() {
    return this.authSvc.checkLogin();
  }
}
