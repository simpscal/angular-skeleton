import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PAGE_ROUTES } from '@app/shared/constants';
import { TokenStorageService } from '@core/services';

@Injectable({ providedIn: 'root' })
export class GuestGuard implements CanActivate {
    private router = inject(Router);
    private tokenStorageService = inject(TokenStorageService);

    canActivate() {
        const isLoggedIn = this.tokenStorageService.isLoggedIn();

        if (isLoggedIn) {
            this.router.navigate([PAGE_ROUTES.ADMIN]);

            return false;
        }

        return true;
    }
}
