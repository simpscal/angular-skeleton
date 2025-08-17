import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'admin',
        loadChildren: () => import('admin/Routes').then((m) => m!.appRoutes)
    }
];
