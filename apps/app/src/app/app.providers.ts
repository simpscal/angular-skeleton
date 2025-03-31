import { EnvironmentProviders, Provider } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import PRIMENG_PROVIDERS from './@primeng/primeng.providers';
import ROUTES from './app.routes';
import { AuthInterceptor } from '@core/interceptors';
import APP_STORE_PROVIDERS from '@store/app.store';

export const APP_PROVIDERS: (Provider | EnvironmentProviders)[] = [
    provideHttpClient(),
    provideRouter(ROUTES),
    provideAnimationsAsync(),
    ...PRIMENG_PROVIDERS,
    ...APP_STORE_PROVIDERS,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
];

export default APP_PROVIDERS;
