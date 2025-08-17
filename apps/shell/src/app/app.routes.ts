import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'admin'
    },
    {
        path: 'admin',
        loadChildren: () => import('admin/Routes').then((m) => m!.appRoutes)
    },
    {
        path: 'provider',
        loadChildren: () => import('provider/Routes').then((m) => m!.appRoutes)
    },
    {
        path: 'parent',
        loadChildren: () => import('parent/Routes').then((m) => m!.appRoutes)
    }
];
