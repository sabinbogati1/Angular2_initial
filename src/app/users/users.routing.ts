import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"

import { UserlistComponent } from './userlist/userlist.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const usersRoute: Routes = [
    {
        path: "user-list", component: UserlistComponent
    },
    {
        path: "edit/:id", component: EditUsersComponent
    },
    {
        path: "add", component: AddUsersComponent
    },
    {
        path: "dashboard", component: DashboardComponent
    }
];

@NgModule({


    imports: [
        RouterModule.forChild(usersRoute)
    ],
    exports: [
        RouterModule
    ]


})







export class UsersRoutingModule { }