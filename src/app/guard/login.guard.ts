import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, RouterStateSnapshot } from '@angular/router';

export class LoginGuard implements CanActivate{
    canActivate(route:ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            const currentUser = localStorage.getItem('currentUser');
            return (!! currentUser);
        }
}