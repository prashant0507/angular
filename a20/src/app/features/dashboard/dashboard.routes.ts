import { Routes } from "@angular/router";
import { Users } from "./users/users";
import { Detail } from "./detail/detail";
import { Edit } from "./edit/edit";
import { userResolver } from "./services/user-resolver-resolver";

export const DASHBOARD_ROUTES: Routes = [
    {
        path:'',
        redirectTo: 'list',
        pathMatch: 'full'
    }, 
    {
        path: 'list',
        resolve: {userData: userResolver},
        component: Users
    },
    {
        path: 'detail/:id',
        component: Detail
    },
    {
        path: 'edit/:id',
        component: Edit
    }
]
