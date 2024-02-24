import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '@shared/components/menu/menu.component';
import {BcIconModule} from "@bancolombia/design-system-web/bc-icon";
import {RouterLink, RouterOutlet} from "@angular/router";
import {BcHeaderModule} from "@bancolombia/design-system-web/bc-header";
import {BcMenuModule} from "@bancolombia/design-system-web/bc-menu";
import { SearchBoxComponent } from './components/search-box/search-box.component';
import {BcInputModule} from "@bancolombia/design-system-web/bc-input";
import {BcButtonModule} from "@bancolombia/design-system-web/bc-button";
import {FormsModule} from "@angular/forms";
import {BcListModule} from "@bancolombia/design-system-web/bc-list";
import {BcInputSelectModule} from "@bancolombia/design-system-web/bc-input-select";

@NgModule({
  declarations: [
    MenuComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    BcIconModule.forRoot({path: 'https://library-sdb.apps.bancolombia.com/bds/7.0.0/bds.min.css'}),
    BcHeaderModule,
    BcMenuModule,
    RouterOutlet,
    RouterLink,
    BcInputModule,
    BcButtonModule,
    FormsModule,
    BcListModule,
    BcInputSelectModule,

  ],
  exports:[
    MenuComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
