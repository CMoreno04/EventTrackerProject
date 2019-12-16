import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  login(form: NgForm) {
    this.authSvc.login(form.value.username, form.value.password).subscribe(
      data => {
        console.log(data);
        this.route.navigateByUrl('flight');
      },
      err => {
        console.log(err);
        this.route.navigateByUrl('notFound');
      }
    );
  }
}
