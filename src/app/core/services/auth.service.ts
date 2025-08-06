import { inject, Injectable } from '@angular/core';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@app/shared/constants';
import { AuthViewModel } from '@app/shared/models';
import { JwtTokenUtil } from '@app/shared/utils';
import { delay, firstValueFrom, of, tap } from 'rxjs';

import { ApiService } from './api.service';

const EXAMPLE_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxMTEwMzg5OTk5OX0.0FAYr7bWrVXQb1MqATfNMjE8B3djQ61nfAtHaBOzL-c';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _apiService = inject(ApiService);

    async isLoggedIn() {
        const token = localStorage.getItem(ACCESS_TOKEN_KEY);
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

        const isTokenExpired = JwtTokenUtil.isTokenExpired(token);
        const isRefreshTokenExpired = JwtTokenUtil.isTokenExpired(refreshToken);

        if (isTokenExpired) {
            if (isRefreshTokenExpired) {
                return false;
            }

            return firstValueFrom(this.getAccessToken(refreshToken));
        }

        return true;
    }

    getAccessToken(refreshToken: string) {
        return of(refreshToken).pipe(
            tap((accessToken) => {
                localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
            })
        );
    }

    login(auth: AuthViewModel) {
        return this._apiService.post('auth', auth.toRequest()).pipe(
            delay(1000),
            tap(() => {
                localStorage.setItem(ACCESS_TOKEN_KEY, EXAMPLE_TOKEN);
                localStorage.setItem(REFRESH_TOKEN_KEY, EXAMPLE_TOKEN);
            })
        );
    }
}
