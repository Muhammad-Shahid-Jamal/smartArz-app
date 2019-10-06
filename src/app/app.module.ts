import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterCompComponent } from './filter-comp/filter-comp.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SubFilterComponent } from './sub-filter/sub-filter.component';
import { ListItemComponent } from './list-item/list-item.component';
import { from } from 'rxjs';
import { PaginationCompComponent } from './pagination-comp/pagination-comp.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterCompComponent,
    BreadcrumbComponent,
    SubFilterComponent,
    ListItemComponent,
    PaginationCompComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
