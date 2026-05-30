import { Routes } from "@angular/router";
import { Users } from "./users/users";
import { Detail } from "./detail/detail";
import { Edit } from "./edit/edit";

export const DASHBOARD_ROUTES: Routes = [
    {
        path:'',
        redirectTo: 'list',
        pathMatch: 'full'
    }, 
    {
        path: 'list',
        component: Users
    },
    {
        path: 'detail',
        component: Detail
    },
    {
        path: 'edit',
        component: Edit
    }
]