import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book, BookDetail} from "@shared/interfaces/book";
import {Observable, } from "rxjs";
import {environments} from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public baseUrl: string = environments.baseUrl;
  constructor(private http: HttpClient ) { }

  searchBooks(term: string): Observable<Book> {
    const url = `${this.baseUrl}/search/${term}`;
    return this.http.get<Book>(url);
  }
  searchBooksNew(): Observable<Book> {
    const url = `${this.baseUrl}/new`;
    return this.http.get<Book>(url);
  }

  searchBookDetails(bookId: string): Observable<BookDetail> {
    const url = `${this.baseUrl}/books/${bookId}`;
    return this.http.get<BookDetail>(url);

}
}
