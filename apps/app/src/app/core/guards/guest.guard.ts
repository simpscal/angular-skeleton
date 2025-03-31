import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { PAGE_ROUTES } from '@app/shared/constants';

import { AuthService } from '@core/services';

@Injectable({ providedIn: 'root' })
export class GuestGuard implements CanActivate {
    constructor(
        private _router: Router,
        private _authService: AuthService
    ) {}

    async canActivate() {
        const isLoggedIn = await this._authService.isLoggedIn();

        if (isLoggedIn) {
            this._router.navigate([PAGE_ROUTES.ADMIN]);

            return false;
        }

        return true;
    }
}
