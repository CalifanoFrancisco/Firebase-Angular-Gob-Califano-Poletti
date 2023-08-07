import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesTiempoService {

  private data:any;

  constructor(private http:HttpClient) { }

  private fetchData(url:string):Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(url)
      .subscribe(data => resolve(data));
    });
  }

  getSeriesTiempo() {

    const URL = 'https://apis.datos.gob.ar/series/api/series?ids=168.1_T_CAMBIOR_D_0_0_26,103.1_I2N_2016_M_15&format=json&metadata=full'

    this.fetchData(URL)
    .then(data => this.data = data)
    .catch(err => console.log(err));

    return this.data;
  }

}
