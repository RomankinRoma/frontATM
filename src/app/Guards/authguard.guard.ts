import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
    constructor(private userLog: UserService,private router: Router) {
    }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.userLog.loggedIn){
      alert('You are not allowed to view this page. You are redirected to login Page');
      this.router.navigate(['login']);
      return false;
    }
    console.log("You have access!");

    return true;
  }

}
