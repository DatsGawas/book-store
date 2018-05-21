/**
 * Created by dattaram on 21/5/18.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {User} from "../models/classes/user";
import {RestCallService} from "../services/rest-call/rest.call.service";
import {StoreLoadGuard} from "../services/guards/store-load.guard";

@Component({
  selector: 'login',
  template:`

    <div class="row justify-content-center ">
      <div class="col-6" style="padding-top: 100px;">
          <div class="form-signin">
            <label for="username">User Name</label>
            <input type="email" [(ngModel)]="loginModel.userName" class="form-control" id="username" aria-describedby="emailHelp" placeholder="User name">
          </div>
          <div class="form-group">
            <label for="passwordfield">Password</label>
            <input type="password" [(ngModel)]="loginModel.password" class="form-control" id="passwordfield" placeholder="Password">
          </div>
          <button (click)="loginClick($event)" type="submit" class="btn btn-primary" style="float: right">Login</button>
      </div>
    </div>
  `,
  styles: [
    `
      login-alignment {
        padding-top: 100px;
      }
    
    `
  ]
})

export class LoginComponent implements OnInit {
  loginModel: User;
  constructor(private route: Router, private _cookieService: CookieService, private _restCallService: RestCallService,private _storeLoadGuard: StoreLoadGuard) {
    this.loginModel = new User();
  }

  ngOnInit() {
  }

  loginClick() {
    if(this.loginModel.userName != '' && this.loginModel.password != '') {
        let reponseData:any;
        this._restCallService.getUserData('/assets/data/admin.json').subscribe(
          response => {
            reponseData = response.data;
          },
          err => {},
          () => {
            if(this.validLoginUser(reponseData)) {
              this._cookieService.set('username', this.loginModel.userName);
              this._cookieService.set('password', this.loginModel.password);
              this._storeLoadGuard.isvalidUser = true;
              this.route.navigate(['/home']);
            }
          });
    }
  }
  /*check is user valid or Invalid*/
  validLoginUser(usersData: any): boolean {
    let status: boolean=false;
    usersData.forEach((opt: any) => {
      if(opt.username == this.loginModel.userName && opt.password == this.loginModel.password) {
        status = true;
      } else {
        status = false;
      }
    });
    return status;
  }
}

