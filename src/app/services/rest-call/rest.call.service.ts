/**
 * Created by dattaram on 21/5/18.
 */

import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {RestUrls} from "../../constants/rest-urls";
import {Book} from "../../models/classes/book";

@Injectable()
export class RestCallService {
  constructor( private _http: HttpClient) {

  }

  getUserData(url: any): Observable<any> {
    return this._http.get<Book>(url);
  }

  /*Update Book details*/

  updateBook(book: Book): Observable<Book> {
    const requestJson = {
      ID: book.ID,
    Title: book.Title,
    Description: book.Description,
    PageCount: book.PageCount,
    Excerpt: book.Excerpt,
    PublishDate: book.PublishDate,
    };
    return this._http.put<Book>(`${RestUrls.books}/${book.ID}`, requestJson);
  }

  /*delete book*/
  deleteBook(bookId: number): Observable<any> {
    return this._http.delete<Book>(`${RestUrls.books}/${bookId}`);
  }

  /*Add new Book*/
  addBook(book: Book): Observable<Book> {
    const requestJson = {
      ID: book.ID,
      Title: book.Title,
      Description: book.Description,
      PageCount: book.PageCount,
      Excerpt: book.Excerpt,
      PublishDate: book.PublishDate,
    };
    return this._http.post<Book>(`${RestUrls.books}`, requestJson);
  }
}
