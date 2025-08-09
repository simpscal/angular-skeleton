import { HttpInterceptorFn, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_HEADER_KEY, AUTH_SCHEME_KEY, PAGE_ROUTES } from '@app/shared/constants';
import { AuthService } from '@core/services';
import { TokenStorageService } from '@core/services';
import {
    BehaviorSubject,
    catchError,
    filter,
    firstValueFrom,
    from,
    Observable,
    switchMap,
    take,
    throwError
} from 'rxjs';

let isRefreshing = false;
let refreshToken$ = new BehaviorSubject<string | null>(null);

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const router = inject(Router);
    const authService = inject(AuthService);
    const tokenStorage = inject(TokenStorageService);

    const setAuthHeader = (request: HttpRequest<any>, token?: string) => {
        const accessToken = token || tokenStorage.getAccessToken();
        if (accessToken) {
            return request.clone({
                headers: request.headers.set(AUTH_HEADER_KEY, `${AUTH_SCHEME_KEY} ${accessToken}`)
            });
        }
        return request;
    };

    const handleTokenRefresh = (): Observable<string> => {
        if (isRefreshing) {
            return refreshToken$.pipe(
                filter((token) => token !== null),
                take(1)
            ) as Observable<string>;
        }

        isRefreshing = true;
        refreshToken$.next(null);

        return from(firstValueFrom(authService.refreshAccessToken())).pipe(
            switchMap((newToken: string) => {
                tokenStorage.setAccessToken(newToken);
                refreshToken$.next(newToken);

                isRefreshing = false;

                return [newToken];
            }),
            catchError((error) => {
                isRefreshing = false;
                refreshToken$.next(null);

                router.navigate([PAGE_ROUTES.AUTH_LOGIN]);

                return throwError(() => error);
            })
        );
    };

    const handleUnauthorized = (error: any): Observable<any> => {
        if (tokenStorage.isLoggedIn() && tokenStorage.needsTokenRefresh()) {
            return handleTokenRefresh().pipe(
                switchMap((newToken: string) => {
                    const newReq = setAuthHeader(req, newToken);
                    return next(newReq);
                }),
                catchError(() => {
                    return throwError(() => error);
                })
            );
        } else {
            router.navigate([PAGE_ROUTES.AUTH_LOGIN]);
            return throwError(() => error);
        }
    };

    const authReq = setAuthHeader(req);

    return next(authReq).pipe(
        catchError((error) => {
            if (error.status === HttpStatusCode.Unauthorized) {
                return handleUnauthorized(error);
            }
            return throwError(() => error);
        })
    );
};
