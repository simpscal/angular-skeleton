import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PAGE_ROUTES } from '@app/shared/constants';
import { TokenStorageService } from '@core/services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    private _router = inject(Router);
    private _tokenStorageService = inject(TokenStorageService);

    canActivate() {
        const isLoggedIn = this._tokenStorageService.isLoggedIn();

        if (!isLoggedIn) {
            this._router.navigate([PAGE_ROUTES.AUTH_LOGIN]);

            return false;
        }

        return true;
    }
}
