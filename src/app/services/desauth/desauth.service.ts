import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
  })

export class DesAuthService {
  
  constructor(private router:Router) {}
  // ...
  public desAuthenticate() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}

