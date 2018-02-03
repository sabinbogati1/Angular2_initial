import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  routeParams;
  constructor(
    private router: Router,
    private activateRoute:ActivatedRoute
  ) { }

  ngOnInit() {

    this.routeParams= this.activateRoute.snapshot.params["id"];
    console.log("Route params is: ", this.routeParams);
  }

}
