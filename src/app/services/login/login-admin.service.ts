import { Injectable, OnDestroy } from '@angular/core';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {
  token
  constructor(private http:HttpClient,private router:Router) {
   }

   post(datas){
        const API_URL = environment.apiUrl;
        this.http.post(API_URL+'/login/admin',datas).subscribe(data => {
          this.token = data['token'];
          localStorage.setItem('token',this.token)
          if(this.token){
            this.router.navigate(['admin']);
          }
        });
   }
   
}
