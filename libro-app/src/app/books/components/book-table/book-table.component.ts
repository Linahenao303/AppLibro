import {Component, Input} from '@angular/core';
import {BookElement} from "@shared/interfaces/book";

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent {

  @Input()
  public book: BookElement[] = [];

  @Input()
  public timeShowAlert: boolean = false;


}
