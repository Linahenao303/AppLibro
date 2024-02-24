import {Component, OnInit} from '@angular/core';
import {BookElement} from "@shared/interfaces/book";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-new-book-page',
  templateUrl: './new-book-page.component.html',
  styleUrls: ['./new-book-page.component.scss']
})
export class NewBookPageComponent implements OnInit {

  public books: BookElement[] = [];

  public arrResultNull = [
    'Pruebe diferentes palabras claves',
    'Pruebe con un solo criterio de búsqueda',
  ];

  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.searchBookNew()
  }

  searchBookNew(): void {
    this.booksService.searchBooksNew()
      .subscribe(response => {
        this.books = response.books;
      });

  }

  onChangesData(data: any) {
    const parsedData = JSON.parse(JSON.stringify(data));
    if (parsedData.result.length > 0) {
      this.books = parsedData.result;
    } else {
      this.searchBookNew();
    }
  }

  eventEmitter() {
    this.searchBookNew();
  }

}
