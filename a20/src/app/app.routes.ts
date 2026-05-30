import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { unsavedGuard } from './core/guards/unsaved-guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'account',
        pathMatch: 'full'
    },
    {
        path:'account',
        loadChildren: () => import('./features/auth/auth.routes').then(m=>m.AUTH_ROUTES)
    },
    {
        path:'user',
        canActivate: [authGuard],
        canDeactivate: [unsavedGuard],
        loadChildren: () => import('./features/dashboard/dashboard.routes').then(m=>m.DASHBOARD_ROUTES)
    }
];
