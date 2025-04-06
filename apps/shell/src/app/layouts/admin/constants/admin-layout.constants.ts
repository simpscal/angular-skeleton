import { MenuItemModel } from '../components/side-bar/models';
import { PAGE_ROUTES } from '@libs/shared/constants';

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
