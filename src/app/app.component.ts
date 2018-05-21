import { Component } from '@angular/core';
import {NotificationService} from "./services/notification/notification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public _notificationService: NotificationService) {

  }
}
