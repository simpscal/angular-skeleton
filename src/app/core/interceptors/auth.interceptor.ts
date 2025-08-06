import { HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ACCESS_TOKEN_KEY, AUTH_HEADER_KEY, AUTH_SCHEME_KEY, PAGE_ROUTES } from '@app/shared/constants';
import { LocalStorageUtility } from '@app/shared/utilities';
import { AuthService } from '@core/services';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
    private _router = inject(Router);
    private _authService = inject(AuthService);

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        req = this._setAuthHeader(req);

        return next.handle(req).pipe(
            catchError(async (error) => {
                if (error.status === HttpStatusCode.Unauthorized) {
                    return this._handleUnauthorized(req, next, error);
                }

                return throwError(() => error);
            }),
            switchMap((response) => {
                return response instanceof Observable ? response : of(response);
            })
        );
    }

    private async _handleUnauthorized(req: HttpRequest<any>, next: HttpHandler, error: any) {
        if (await this._authService.isLoggedIn()) {
            const newReq = this._setAuthHeader(req);

            return next.handle(newReq);
        }

        await this._router.navigate([PAGE_ROUTES.AUTH_LOGIN]);

        return throwError(() => error);
    }

    private _setAuthHeader(req: HttpRequest<any>) {
        return req.clone({
            headers: req.headers.set(
                AUTH_HEADER_KEY,
                `${AUTH_SCHEME_KEY} ${LocalStorageUtility.getSecretData(ACCESS_TOKEN_KEY)}`
            )
        });
    }
}
