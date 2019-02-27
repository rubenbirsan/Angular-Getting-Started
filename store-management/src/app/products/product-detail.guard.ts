import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate  {

  constructor(private router: Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  | Promise<boolean> | boolean {
    const id = +next.url[1].path;
    // const id2 = next.paramMap.get('id');
    // console.log(id2);
    if (isNaN(id) || id < 1) {
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
