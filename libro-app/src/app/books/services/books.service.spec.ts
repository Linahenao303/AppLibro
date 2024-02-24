import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BooksService } from './books.service'; // Replace with the correct path


  let service: BooksService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BooksService],
    });

    service = TestBed.inject(BooksService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

describe('BooksService', () => {

  it('should send a GET request to searchBooks endpoint', () => {
    const term = 'test';
    service.searchBooks(term).subscribe();
    const req = httpTestingController.expectOne(`${service.baseUrl}/search/${term}`);
    expect(req.request.method).toBe('GET');
    req.flush({ books: ['book1', 'book2'] });
  });

  it('should send a GET request to searchBooksNew endpoint', () => {
    service.searchBooksNew().subscribe();
    const req = httpTestingController.expectOne(`${service.baseUrl}/new`);
    expect(req.request.method).toBe('GET');
    req.flush({ books: ['book1', 'book2'] });
  });

  it('should send a GET request to searchBookDetails endpoint', () => {
    const bookId = '123';
    service.searchBookDetails(bookId).subscribe();
    const req = httpTestingController.expectOne(`${service.baseUrl}/books/${bookId}`);
    expect(req.request.method).toBe('GET');
    req.flush({ title: 'Sample Book',
      author: 'John Doe',});
  });
});
