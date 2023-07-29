
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class authguardService implements CanActivate {

  // Inject the required services
  constructor(private router: Router, private http: HttpClient) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    // 'http://10.10.80.67:8081/api/verify'
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    return this.http.get<any>(`${environment.properties.ssdURL}user/info`,{ withCredentials: true }).pipe(
      map(response => {
        const user = response
        if (user?.email || user?.user?.email) {
                  // User is logged in
          
                  if (!user?.admin && !user?.user?.admin) {
                    // Customer is logged in
          
                    if (
                      route.url.some((segment: UrlSegment) =>
                        segment.path.includes('user')
                      )
                    ) {
                      // Allow access to "/Neutri" and "topic" routes
                      return true;
                    } else {
                      // Redirect to customer dashboard ("/Neutri")
                      this.router.navigateByUrl('/user/home');
                      return false;
                    }
                  } else if (user?.admin || user?.user?.admin) {
                    // Admin is logged in
          
                    if (route.url.some((segment: UrlSegment) => segment.path.includes('admin'))) {
                      // Allow access to "/admin" route
                      return true;
                    } else {
                      // Redirect to admin dashboard ("/admin")
                      this.router.navigateByUrl('/admin/home');
                      return false;
                    }
                  }
                }else{
               if (
            route.url.some((segment: UrlSegment) =>
              segment.path.includes('auth') 
            )
          ) {
          
            return true;
          } else {
            // Redirect to customer dashboard ("/login")
            this.router.navigateByUrl('/auth');
            return false;
          }
                }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error) {
          // Unauthorized - Redirect to login page or perform other action
          if (
            route.url.some((segment: UrlSegment) =>
              segment.path.includes('auth') 
            )
          ) {
          
            return of(true);
          } else {
            // Redirect to customer dashboard ("/login")
            this.router.navigateByUrl('/auth');
            return of(false);
          }
        }
      })
    );
  }
}

