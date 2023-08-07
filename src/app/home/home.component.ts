import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  goToLogin() {
    location.href = 'http://localhost:4200/login';
  }
  goToRegister() {
    location.href = 'http://localhost:4200/register';
  }
}
