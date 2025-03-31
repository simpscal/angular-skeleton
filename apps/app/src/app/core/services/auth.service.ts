import { Injectable } from '@angular/core';
import { delay, firstValueFrom, of, tap } from 'rxjs';

import { JwtTokenUtility, LocalStorageUtility } from '@app/shared/utilities';

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@app/shared/constants';
import { AuthViewModel } from '@app/shared/models';

import { ApiService } from './api.service';

const EXAMPLE_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxMTEwMzg5OTk5OX0.0FAYr7bWrVXQb1MqATfNMjE8B3djQ61nfAtHaBOzL-c';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private _apiService: ApiService) {}

    async isLoggedIn() {
        const token = LocalStorageUtility.getSecretData(ACCESS_TOKEN_KEY);
        const refreshToken = LocalStorageUtility.getSecretData(REFRESH_TOKEN_KEY);

        const isTokenExpired = JwtTokenUtility.isTokenExpired(token);
        const isRefreshTokenExpired = JwtTokenUtility.isTokenExpired(refreshToken);

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
                LocalStorageUtility.storeSecretData(ACCESS_TOKEN_KEY, accessToken);
            })
        );
    }

    login(auth: AuthViewModel) {
        return this._apiService.post('auth', auth.toRequest()).pipe(
            delay(1000),
            tap(() => {
                LocalStorageUtility.storeSecretData(ACCESS_TOKEN_KEY, EXAMPLE_TOKEN);
                LocalStorageUtility.storeSecretData(REFRESH_TOKEN_KEY, EXAMPLE_TOKEN);
            })
        );
    }
}
