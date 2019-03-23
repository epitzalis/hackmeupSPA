import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from '../shaded/menu/menu.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    PagesRoutingModule,
  ],
  declarations: [
    PagesComponent,
    PrincipalComponent,
    ProfileComponent,
    LoginComponent,
    ProductsComponent,
    MenuComponent
  ],
  exports: [
    PagesComponent,
    PrincipalComponent,
    MenuComponent
  ]
})
export class PagesModule { }
