import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DesAuthService } from '../desauth/desauth.service';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
  
  constructor(private http:HttpClient, private DesAuthenticate: DesAuthService) {}
  // ...
  public isAuthenticated() {
    const token = localStorage.getItem('token');
    if(!token)
        return(false)
    return (this.get)
    }
    public get=new Promise((resolve,reject)=>{
        let jwtHelper = new JwtHelperService();
        const token = localStorage.getItem('token');

            
            const API_URL = environment.apiUrl;
            this.http.get(API_URL+'/adm',{
                headers: new HttpHeaders().set('Authorization', token)
            }).subscribe(data => {
                console.log(data)
                    if(data['status'] == 200){
                        return resolve(true)
                    }
                    return resolve(false)
                },
                err =>{
                    if(err.status == 401){
                        return this.DesAuthenticate.desAuthenticate()
                    }
                });
        })
    }

