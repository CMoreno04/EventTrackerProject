import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  constructor(private authSvc: AuthService, private route: Router) {}

  ngOnInit() {}

  register(newUser: User) {
    this.authSvc.register(newUser).subscribe(
      data => {
        this.authSvc.login(newUser.username, newUser.password).subscribe(
          dat => {
            console.log(dat);
            this.route.navigateByUrl('todo');
          },
          err => {
            console.log(err);
            this.route.navigateByUrl('notFound');
          }
        );
      },
      err => {
        console.log(err);
        this.route.navigateByUrl('notFound');
      }
    );
  }

}
