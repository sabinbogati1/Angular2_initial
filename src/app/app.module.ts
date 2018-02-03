import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms"

import {Routes, RouterModule} from "@angular/router"

import {AppRoutingModule} from "./appRouting.module"

import { AppComponent } from './app.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {AuthModule} from "./authModule/auth.module";

import {UsersModule} from "./users/users.module";


@NgModule({
  declarations: [
    AppComponent,
    ForgetPasswordComponent,
    PageNotFoundComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
