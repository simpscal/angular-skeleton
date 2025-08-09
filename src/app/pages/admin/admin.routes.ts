import { Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

const ROUTES: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'users',
                loadComponent: () => import('./pages/users/users.component').then((m) => m.UsersComponent)
            },
            {
                path: 'boats',
                loadComponent: () => import('./pages/boats/boats.component').then((m) => m.BoatsComponent)
            },
            {
                path: 'boats/:id',
                loadComponent: () =>
                    import('./pages/boat-details/boat-details.component').then((m) => m.BoatDetailsComponent)
            }
        ]
    }
];

export default ROUTES;
