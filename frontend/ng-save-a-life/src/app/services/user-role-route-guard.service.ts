import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleRouteGuardService implements CanActivate {

  constructor(private authService: AuthService) {
  }

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let isUser = false;
   this.authService.getUserRoles().forEach(value => {
     if (value['authority'].includes('USER')) {
       isUser = true;
     }
   });

   return isUser;
 }
}
