import { Routes } from '@angular/router';

import { AuthGuard, GuestGuard } from '@core/guards';

const ROUTES: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes'),
        canActivate: [GuestGuard]
    },
    {
        path: 'admin',
        loadComponent: () => import('./layouts/admin/admin.component').then((c) => c.AdminLayoutComponent),
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                loadChildren: () => import('./features/admin/admin.routes')
            }
        ]
    },
    {
        path: 'maintenance',
        loadComponent: () => import('./pages/maintenance/maintenance.component').then((c) => c.PageMaintenanceComponent)
    },
    {
        path: '',
        loadComponent: () => import('./layouts/main/main.component').then((c) => c.MainLayoutComponent),
        canActivate: [AuthGuard],
        children: []
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then((c) => c.PageNotFoundComponent)
    }
];

export default ROUTES;
