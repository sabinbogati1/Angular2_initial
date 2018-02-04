import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {AuthRoutingModule} from "./auth.routing";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

//importing service
import {AuthService} from "./services/auth.service";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    LoginComponent,
     RegisterComponent,
     ForgotPasswordComponent,
      ResetPasswordComponent,
      PageNotFoundComponent],

      providers:[
        AuthService
      ]
})
export class AuthModule { }
