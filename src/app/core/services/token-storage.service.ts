import { Injectable } from '@angular/core';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@app/shared/constants';
import { jwtDecode } from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {
    setTokens(accessToken: string, refreshToken: string) {
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    }

    setAccessToken(accessToken: string) {
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    }

    setRefreshToken(refreshToken: string) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    }

    getAccessToken() {
        return localStorage.getItem(ACCESS_TOKEN_KEY);
    }

    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN_KEY);
    }

    clearTokens() {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
    }

    hasTokens() {
        return !!(this.getAccessToken() && this.getRefreshToken());
    }

    isTokenExpired(token: string) {
        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            return decodedToken.exp! < currentTime;
        } catch {
            return true;
        }
    }

    isLoggedIn() {
        const token = this.getAccessToken();
        const refreshToken = this.getRefreshToken();

        const tokenExpired = this.isTokenExpired(token);
        const refreshTokenExpired = this.isTokenExpired(refreshToken);

        if (!tokenExpired) {
            return true;
        }

        if (tokenExpired && !refreshTokenExpired) {
            return true;
        }

        return false;
    }

    needsTokenRefresh() {
        const token = this.getAccessToken();
        const refreshToken = this.getRefreshToken();

        const tokenExpired = this.isTokenExpired(token);
        const refreshTokenExpired = this.isTokenExpired(refreshToken);

        return tokenExpired && !refreshTokenExpired;
    }
}
