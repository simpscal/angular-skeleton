import { HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ACCESS_TOKEN_KEY, AUTH_HEADER_KEY, AUTH_SCHEME_KEY, PAGE_ROUTES } from '@app/shared/constants';
import { AuthService } from '@core/services';
import { catchError, from, switchMap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const router = inject(Router);
    const authService = inject(AuthService);

    const setAuthHeader = (request: typeof req) => {
        const token = localStorage.getItem(ACCESS_TOKEN_KEY);
        if (token) {
            return request.clone({
                headers: request.headers.set(AUTH_HEADER_KEY, `${AUTH_SCHEME_KEY} ${token}`)
            });
        }
        return request;
    };

    const handleUnauthorized = async (error: any) => {
        if (await authService.isLoggedIn()) {
            const newReq = setAuthHeader(req);
            return next(newReq);
        }

        await router.navigate([PAGE_ROUTES.AUTH_LOGIN]);
        return throwError(() => error);
    };

    const authReq = setAuthHeader(req);

    return next(authReq).pipe(
        catchError((error) => {
            if (error.status === HttpStatusCode.Unauthorized) {
                return from(handleUnauthorized(error)).pipe(switchMap((result) => result));
            }
            return throwError(() => error);
        })
    );
};
