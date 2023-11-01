import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { TokenService } from '../services/token.service';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor (private tokenService: TokenService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise <boolean | UrlTree> | boolean | UrlTree {
      
      const currentRole: string = localStorage.getItem('role') || '';
      const requiredRole: string = route.data['role']; // ?

      console.log('Route: ', route);

      if (currentRole === requiredRole) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }

    }

}
