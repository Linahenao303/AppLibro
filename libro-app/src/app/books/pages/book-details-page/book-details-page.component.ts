import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BooksService} from "../../services/books.service";
import {BookDetail} from "@shared/interfaces/book";

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.scss']
})
export class BookDetailsPageComponent implements OnInit {

  public bookId!: string | null
  public bookDetails!: BookDetail

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {
  }

  ngOnInit(): void {
    this.subscribeToRouteParams()
  }

  private subscribeToRouteParams(): void {
    this.route.paramMap.subscribe(params => {
      this.bookId = params.get('id');
      this.fetchBookDetails(this.bookId);
    });
  }

  fetchBookDetails(bookId: string | null) {
    if (bookId !== null) {
      this.booksService.searchBookDetails(bookId).subscribe((data) => {
        this.bookDetails = data;
      });
    } else {
      console.log('bookId es nulo');
    }
  }

}
