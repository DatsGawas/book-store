/**
 * Created by dattaram on 21/5/18.
 */
import {NgModule} from '@angular/core';
import {BookListComponent} from "./books.list.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {EditBookDetailsComponent} from "../components/edit.book.details.component";

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  }
];
@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, AmexioWidgetModule,
    RouterModule.forChild(routes)], exports: [],
  declarations: [BookListComponent, EditBookDetailsComponent], providers: [],
})
export class BooksHomeModule {
}
