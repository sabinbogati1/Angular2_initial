import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist/userlist.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { AddUsersComponent } from './add-users/add-users.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserlistComponent, EditUsersComponent, AddUsersComponent]
})
export class UsersModule { }
