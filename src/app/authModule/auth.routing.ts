import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
const AuthRoutesArray: Routes = [
    {
        path: "login", component: LoginComponent
    },
    {
        path: "register", component: RegisterComponent
    },
    {
        path: "forgotPassword", component: ForgotPasswordComponent
    },
    {
        path: "resetPassword", component: ResetPasswordComponent
    },
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"

    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];

@NgModule({


    imports: [
        RouterModule.forChild(AuthRoutesArray)
    ],
    exports: [
        RouterModule
    ]


})







export class AuthRoutingModule { }