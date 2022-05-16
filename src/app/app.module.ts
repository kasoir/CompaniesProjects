import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { NavBarComponent } from './base-component/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { BaseComponentComponent } from './base-component/base-component.component';
import { BaseComponentModule } from './base-component/base-component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DropdownModule } from 'primeng/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'users/user/:id', component: UserDetailsComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    FormsModule,
    TableModule,
    PaginatorModule,
    BaseComponentModule,
    ButtonModule,
    DropdownModule,
    TypeaheadModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
