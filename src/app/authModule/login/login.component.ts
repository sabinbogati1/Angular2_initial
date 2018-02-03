import { Component } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user;
  constructor(
    private router:Router
  ) {
    this.user = {
      username:"",
      password:""
    }

  }

  login(){

    this.router.navigate(["/user/dashboard"]);
  }


}
