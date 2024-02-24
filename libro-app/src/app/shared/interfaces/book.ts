export interface Book {
  error: string;
  total: string;
  page:  string;
  books: BookElement[];
}
export interface BookElement {
  title:    string;
  subtitle: string;
  isbn13:   string;
  price:    string;
  image:    string;
  url:      string;
}

export interface BookDetail {
  error:     string;
  title:     string;
  subtitle:  string;
  authors:   string;
  publisher: string;
  language:  string;
  isbn10:    string;
  isbn13:    string;
  pages:     string;
  year:      string;
  rating:    string;
  desc:      string;
  price:     string;
  image:     string;
  url:       string;
}
