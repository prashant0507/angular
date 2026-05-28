import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'account',
        pathMatch: 'full'
    },
    {
        path:'account',
        loadChildren: () => import('./features/auth/auth.routes').then(m=>m.AUTH_ROUTES)
    }
];
