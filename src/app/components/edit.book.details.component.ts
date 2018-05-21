/**
 * Created by dattaram on 21/5/18.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../models/classes/book";
import {RestCallService} from "../services/rest-call/rest.call.service";
import {NotificationService} from "../services/notification/notification.service";

@Component({
  selector: 'edit-book-details',
  template:`

    <amexio-window [show-window]="showWindow"
                   [closable]="true"
                   type="window"
                   [maximize]="false"
                   (close)="closeWindow()"
                   [footer]="true">
      <amexio-header>
        Book Details
      </amexio-header>
      <amexio-body>
        <amexio-form [body-height] = "'70'"  form-name="validbookform" [header]="false" [show-error]="false" >
          <amexio-form-body>
            <amexio-row>
              <amexio-column [size]="6">
                <amexio-text-input [field-label]="'Title'"
                                   [(ngModel)]="bookData.Title"
                                   [place-holder]="'title'"
                                   [enable-popover]="false"
                                   [icon-feedback]="true"
                                   [allow-blank]="false"
                                   [error-msg]="'Please enter book Title'">
                </amexio-text-input>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-date-time-picker
                  [field-label]="'Publish Date'"
                  [time-picker]="false"
                  [required]="true"
                  [date-picker]="true"
                  [(ngModel)]="bookData.PublishDate">
                </amexio-date-time-picker>
              </amexio-column>

            </amexio-row>
            <amexio-row>
              <amexio-column [size]="6">
                <amexio-textarea-input 
                                       [(ngModel)]="bookData.Description"
                                       [field-label]="'Description'"
                                       [place-holder]="'description'"
                                       [allow-blank]="true"
                                       [icon-feedback]="false"
                                       [rows]="'4'"
                                       [columns]="'2'">
                </amexio-textarea-input>
              </amexio-column>
              <amexio-column [size]="6">
                <amexio-textarea-input 
                                       [(ngModel)]="bookData.Excerpt"
                                       [field-label]="'Excerpt'"
                                       [place-holder]="'excerpt'"
                                       [allow-blank]="true"
                                       [icon-feedback]="false"
                                       [rows]="'4'"
                                       [columns]="'2'">
                </amexio-textarea-input>
              </amexio-column>
              <amexio-row>
                <amexio-column [size]="'6'">
                  <amexio-number-input  [enable-popover]="true"
                                        [(ngModel)]="bookData.PageCount"
                                        [field-label]="'Page Count'"
                                        [place-holder]="'page count'"
                                        [allow-blank]="false"
                                        [error-msg] ="'Please enter page count'"
                                        [min-value]="1"
                                        [min-error-msg]="'pages can not be less than 1'"
                                        [icon-feedback]="true">
                  </amexio-number-input>
                </amexio-column>
              </amexio-row>
            </amexio-row>
          </amexio-form-body>
          <amexio-form-action>
            <amexio-button (onClick)="showWindow = false"
                           label="Close">
            </amexio-button>
            <amexio-button  [disabled]="false" [form-bind]="'validbookform'" [type]="'theme-color'"
                           label="Submit" (onClick)="updateBookDetalis()">
            </amexio-button>
          </amexio-form-action>
        </amexio-form>
      </amexio-body>
     
    </amexio-window>

  
    
  `
})

export class EditBookDetailsComponent implements OnInit {

  @Input() showWindow: boolean;

  @Input() bookData: Book;

  @Input() isNewEntry: boolean;

  constructor(private _restCallService: RestCallService, private _notificationService: NotificationService) {
  }

  ngOnInit() {
    this.bookData.PublishDate = new Date(this.bookData.PublishDate);
  }
  /*Update Book detalis*/
  updateBookDetalis() {
    let reponseData: any;
    if(this.isNewEntry) {
      this._restCallService.addBook(this.bookData).subscribe(
        response => {
          reponseData = response;
        },
        err => {},
        () => {
          this._notificationService.notifivationData.push('Record added successfully');
        });
    } else {
       this._restCallService.updateBook(this.bookData).subscribe(
       response => {
       reponseData = response;
       },
       err => {},
       () => {
       this._notificationService.notifivationData.push('record update successfully');
       });
    }

    this.closeWindow();
  }
  /*close window*/
  closeWindow() {
    this.showWindow = false;
  }
}
