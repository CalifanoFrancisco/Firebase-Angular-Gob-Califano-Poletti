import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserData } from '../types/userData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private authService:AuthService) { }

  register() {
    this.authService.register(new UserData(this.email, this.password))
    .then(() => location.href = 'http://localhost:4200/seriesTiempo')
    .catch((e: Error) => console.log(e));
  }
}
