import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist/userlist.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import {UsersRoutingModule} from "./users.routing";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [UserlistComponent, EditUsersComponent, AddUsersComponent, DashboardComponent]
})
export class UsersModule { }
