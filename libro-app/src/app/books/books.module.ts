import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBookPageComponent } from './pages/search-book-page/search-book-page.component';
import { NewBookPageComponent } from './pages/new-book-page/new-book-page.component';
import {BooksRoutingModule} from "./books-routing.module";
import {SharedModule} from "@shared/shared.module";
import { BookTableComponent } from './components/book-table/book-table.component';
import {BcAlertModule} from "@bancolombia/design-system-web/bc-alert";
import {BcTableModule} from "@bancolombia/design-system-web/bc-table";
import {BcButtonModule} from "@bancolombia/design-system-web/bc-button";
import {BcSearchModule} from "@bancolombia/design-system-web/bc-search";
import {BcInputModule} from "@bancolombia/design-system-web/bc-input";
import {BookDetailsPageComponent} from "./pages/book-details-page/book-details-page.component";
import {BcAccordionModule} from "@bancolombia/design-system-web/bc-accordion";



@NgModule({
  declarations: [
    SearchBookPageComponent,
    NewBookPageComponent,
    BookDetailsPageComponent,
    BookTableComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
    BcAlertModule,
    BcTableModule,
    BcButtonModule,
    BcSearchModule,
    BcInputModule,
    BcAccordionModule
  ]
})
export class BooksModule { }
