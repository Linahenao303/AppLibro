import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SearchBookPageComponent} from "./pages/search-book-page/search-book-page.component";
import {NewBookPageComponent} from "./pages/new-book-page/new-book-page.component";
import {BookDetailsPageComponent} from "./pages/book-details-page/book-details-page.component";

const routes: Routes = [
  {
    path:'search',
    component:SearchBookPageComponent
  },
  {
    path:'id/:id',
    component:BookDetailsPageComponent
  },

  {
    path:'new',
    component:NewBookPageComponent
  },

  {
    path: '**',
    redirectTo: 'search'
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class BooksRoutingModule { }
