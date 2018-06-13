import { Injectable, OnDestroy } from '@angular/core';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CaruselService {

  constructor(private http:HttpClient) {
   }

   get(){
        const API_URL = environment.apiUrl;
        this.http.get(API_URL+'/api/carusel-text').subscribe(data => {
          console.log(data);
        });
   }
   
}
