import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminRoleRouteGuardService implements CanActivate {

  constructor(private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let isAdmin = false;
    this.authService.getUserRoles().forEach(value => {
      if (value['authority'].includes('ADMIN')) {
        isAdmin = true;
      }
    });

    return isAdmin;
  }
}
