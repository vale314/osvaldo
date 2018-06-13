import { Injectable, OnDestroy } from '@angular/core';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  constructor(private http:HttpClient) {
   }

   post(datas){
        const API_URL = environment.apiUrl;
        this.http.post(API_URL+'/admin/login',datas).subscribe(data => {
          console.log(data);
        });
   }
   
}
