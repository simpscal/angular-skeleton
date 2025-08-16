import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'admin',
        loadChildren: () => import('admin/Routes').then((m) => m!.appRoutes)
    },
    {
        path: 'maintenance',
        loadComponent: () => import('./pages/maintenance/maintenance.component').then((c) => c.PageMaintenanceComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then((c) => c.PageNotFoundComponent)
    }
];
