import { Component } from '@angular/core';
import { UserData } from '../types/userData';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService:AuthService) { }

  login() {
    this.authService
      .login(new UserData(this.email, this.password))
      .then(() => location.href = 'http://localhost:4200/seriesTiempo')
      .catch((e: Error) => console.log(e));
  }

  register() {
    location.href = 'http://localhost:4200/register';
  }

  logout() {
    this.authService
      .logout()
      .then(() => console.log('logged out'))
      .catch((e: Error) => console.log(e));
  }
}
