/**
 * Created by dattaram on 22/5/18.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class NotificationService {
  public notifivationData: any[];
  constructor() {
    this.notifivationData = [];
  }
}
