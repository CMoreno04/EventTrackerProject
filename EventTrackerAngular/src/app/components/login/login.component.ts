import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authSvc: AuthService, private route: Router) {}

  ngOnInit() {}
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
