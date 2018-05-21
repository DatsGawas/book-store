import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RestCallService} from "./services/rest-call/rest.call.service";
import {CookieService} from "ngx-cookie-service";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {StoreLoadGuard} from "./services/guards/store-load.guard";
import {AppRoutingModule} from "./app-routing.module";
import {NotificationService} from "./services/notification/notification.service";

@NgModule({
  declarations: [
    AppComponent, LoginComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AmexioWidgetModule,
    AppRoutingModule
  ],
  providers: [RestCallService, CookieService, StoreLoadGuard, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
