import {NgModule} from "@angular/core";
import {Routes , RouterModule} from "@angular/router"
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const RoutesArray : Routes =[
    {
      path:"login", component: LoginComponent
    },
    {
      path:"register", component:RegisterComponent
    },
    {
      path:"forgetPassword", component:ForgetPasswordComponent
    },
    {
        path:"dashboard", component:DashboardComponent
    },
    {
      path:"",
      redirectTo:"/login",
      pathMatch:"full"
  
    },
    {
      path:"**",
      component:PageNotFoundComponent
    }
  
  ];
  

@NgModule({

       
        imports:[
                 RouterModule.forRoot(RoutesArray, {enableTracing: true})
        ],
        exports:[
            RouterModule
        ]

     
})

export class AppRoutingModule{}