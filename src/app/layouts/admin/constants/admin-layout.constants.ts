import { PAGE_ROUTES } from '@app/shared/constants';

import { MenuItemModel } from '../components/side-bar/models';

export const MENU_ITEMS: MenuItemModel[] = [
    {
        text: 'Users',
        routerLink: PAGE_ROUTES.ADMIN_USERS
    },
    {
        text: 'Boats',
        routerLink: PAGE_ROUTES.ADMIN_BOATS
    }
];
