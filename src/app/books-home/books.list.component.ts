/**
 * Created by dattaram on 21/5/18.
 */
import {Component, OnInit} from '@angular/core';
import {RestCallService} from "../services/rest-call/rest.call.service";
import {Router} from "@angular/router";
import {Book} from "../models/classes/book";
import {NotificationService} from "../services/notification/notification.service";

@Component({
  selector: 'books-home',
  template:
  `
    <amexio-card [header]="true"
                 [footer]="false"
                 [show]="true"
                [header-align]="'right'">
      <amexio-header>
        <amexio-button (onClick)="onAddBookClick()" [type]="'theme-color'"
                       label="Add Book">
        </amexio-button>
        <amexio-button (onClick)="onLogoutClick()"
                       label="Logout">
        </amexio-button>
        
      </amexio-header>
      <amexio-body>
        <amexio-datagrid
          [enable-column-fiter]="true"
          title="Book Detalis"
          [http-method]="'get'"
          [http-url]="'http://fakerestapi.azurewebsites.net/api/Books'"
          [page-size] = "10">
          <amexio-data-table-column [data-index]="'ID'"
                                    [width]="10"
                                    [data-type]="'string'"
                                    [hidden]="false"
                                    [text]="'ID'">
          </amexio-data-table-column>
          <amexio-data-table-column [data-index]="'Title'"
                                    [width]="20"
                                    [data-type]="'string'"
                                    [hidden]="false"
                                    [text]="'Title'">
          </amexio-data-table-column>
          <amexio-data-table-column [data-index]="'PublishDate'"
                                    [width]="50"
                                    [data-type]="'string'"
                                    [hidden]="false"
                                    [text]="'Publish Date'">
          </amexio-data-table-column>
          <amexio-data-table-column [width]="20" [data-index]="''" [data-type]="'string'" [hidden]="false" [text]="''">
            <ng-template #amexioBodyTmpl let-column let-row="row">
              <amexio-row>
                <amexio-column [size]="6">
                  <amexio-button [label]="'Edit'" [size]="'small'" [type]="'theme-backgroundcolor'" [tooltip]="'edit'" (onClick)="openBookEditWindow(row)">
                  </amexio-button>
                </amexio-column>
                <amexio-column [size]="6">
                  <amexio-button [label]="'Delete'" [size]="'small'" [type]="'theme-backgroundcolor'" [tooltip]="'delete'" (onClick)="onBookDeleteClick(row)">
                  </amexio-button>
                </amexio-column>
              </amexio-row>
            </ng-template>
          </amexio-data-table-column>
        </amexio-datagrid>
      </amexio-body>
    </amexio-card>

  

    <ng-container *ngIf="showBookDetailsWindow">
      <edit-book-details [showWindow]="showBookDetailsWindow" [bookData]="bookData" [isNewEntry]="addBook"></edit-book-details>
    </ng-container>
    
  `
})

export class BookListComponent implements OnInit {
  private showBookDetailsWindow: boolean;
  private bookData: any;
  private addBook: boolean;
  private confirmdialogue: boolean;
  constructor(private _restCallService: RestCallService, private _route: Router,private _notificationService: NotificationService) {
    this.showBookDetailsWindow = false;
    this.addBook = false;
    this.confirmdialogue = false;
  }
  ngOnInit() {
  }

  /*Open book details in edit mode*/
  openBookEditWindow(data: any) {
    this.showBookDetailsWindow = !this.showBookDetailsWindow;
   this.bookData = data;
  }

  /* Logout action and redirect to the login page*/
  onLogoutClick() {
    this._notificationService.notifivationData.push('User logout successfully');
   this._route.navigate(['/login']);
  }

    /*Add new book*/
  onAddBookClick() {
    this.showBookDetailsWindow = !this.showBookDetailsWindow;
    this.addBook = true;
    this.bookData = new Book();
  }

  /*Delete book detalis*/
  onBookDeleteClick(data: any) {
    this.confirmdialogue = true;
    this._restCallService.deleteBook(data.ID);

  }

}
