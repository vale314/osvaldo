import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServicesSecondaryService {

  constructor(private http:HttpClient) { }

  getIcons(){
    const API_URL = environment.apiUrl;
    this.http.get(API_URL+'/api/services-secondary-icons').subscribe(data => {
      console.log(data);
    });
  }

  getServices(){
    const API_URL = environment.apiUrl;
    this.http.get(API_URL+'/api/services-secondary-services').subscribe(data => {
      console.log(data);
    });
  }
}
