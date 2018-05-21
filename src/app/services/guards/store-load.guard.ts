import { Injectable } from '@angular/core';
import {CanLoad, Route, Router} from "@angular/router";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";
import {NotificationService} from "../notification/notification.service";

@Injectable()
export class StoreLoadGuard implements CanLoad {
  isvalidUser: boolean = false;
  constructor(private router: Router, private _cookieService: CookieService, private _notificationService: NotificationService) { }

  canLoad(route: Route): boolean | Observable<boolean> {
    if(this.isvalidUser) {
      this._notificationService.notifivationData.push('User login successfully');
      return true;
    } else {
      this.router.navigate(['/login']);
      this.isvalidUser = false;
      return false;
    }
  }

}
