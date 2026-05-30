import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { unsavedGuard } from "../../core/guards/unsaved-guard";

export const AUTH_ROUTES: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component: Login
    },
    {
        path:'signup',
        canDeactivate: [unsavedGuard],
        component: Signup
    }

]