import {Component} from '@angular/core';
import {BooksService} from "../../services/books.service";
import {BookElement} from "@shared/interfaces/book";

@Component({
  selector: 'app-search-book-page',
  templateUrl: './search-book-page.component.html',
  styleUrls: ['./search-book-page.component.scss']
})
export class SearchBookPageComponent {

  public books: BookElement[] = [];

  public ShowAlert: boolean = false;

  constructor(private booksService: BooksService) {
  }

  searchBook(term: string): void {
    this.booksService.searchBooks(term)
      .subscribe(response => {
        this.books = response.books;
        this.showAlertBook()
      });

  }

  showAlertBook() {
    const timeOut = 1000;
    if (this.books! && this.books.length === 0) {
      setTimeout(() => {
        this.ShowAlert = true
      }, timeOut);
    }

  }

}
