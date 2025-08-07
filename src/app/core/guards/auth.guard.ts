import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PAGE_ROUTES } from '@app/shared/constants';
import { TokenStorageService } from '@core/services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    private router = inject(Router);
    private tokenStorageService = inject(TokenStorageService);

    canActivate() {
        const isLoggedIn = this.tokenStorageService.isLoggedIn();

        if (!isLoggedIn) {
            this.router.navigate([PAGE_ROUTES.AUTH_LOGIN]);

            return false;
        }

        return true;
    }
}
