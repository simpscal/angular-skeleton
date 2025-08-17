import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./layouts/main/main.component').then((m) => m.MainComponent),
        children: []
    },
    {
        path: 'auth',
        loadComponent: () => import('./layouts/auth/auth.component').then((m) => m.AuthComponent),
        children: []
    }
];
