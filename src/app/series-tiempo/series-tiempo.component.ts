import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SeriesTiempoService } from './series-tiempo.service'

@Component({
  selector: 'app-series-tiempo',
  templateUrl: './series-tiempo.component.html',
  styleUrls: ['./series-tiempo.component.css']
})
export class SeriesTiempoComponent {

  constructor(
    private authService:AuthService,
    private seriesService:SeriesTiempoService
  ) { }

  data:any;

  logout() {
    this.authService.logout();
    location.href = 'http://localhost:4200/';
  }

  getData() {
    this.data = this.seriesService.getSeriesTiempo();
    console.log(this.data);

  }
}