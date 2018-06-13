import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AboutUsIconsService {

  constructor(private http:HttpClient) { }

  get(){
    const API_URL = environment.apiUrl;
    this.http.get(API_URL+'/api/about-us-icons').subscribe(data => {
      console.log(data);
    });
  }
}
