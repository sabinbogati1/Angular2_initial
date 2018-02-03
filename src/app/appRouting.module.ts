import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { AppComponent } from './app.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const RoutesArray: Routes = [
  {

        path:"auth",
        loadChildren:"app/authModule/auth.module#AuthModule"
  },{

    path:"user",
    loadChildren:"app/users/users.module#UsersModule"
  },
    {
        path: "",
        redirectTo: "/auth/login",
        pathMatch: "full"

    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];

@NgModule({


    imports: [
        RouterModule.forRoot(RoutesArray)
    ],
    exports: [
        RouterModule
    ]


})







export class AppRoutingModule { }