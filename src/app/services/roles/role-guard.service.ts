import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import decode from 'jwt-decode';
import { DesAuthService } from '../desauth/desauth.service';

@Injectable({
    providedIn: 'root'
})

export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router,public DesAuthService:DesAuthService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    const tokenPayload = decode(token);
    console.log(expectedRole)
    if (
      !this.auth.isAuthenticated() || 
      tokenPayload.roles !== expectedRole
    ) {
      this.DesAuthService.desAuthenticate();
      return false;
    } 
    return true;
  }
}