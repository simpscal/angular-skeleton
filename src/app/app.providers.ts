import { EnvironmentProviders, Provider } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { AuthInterceptor } from '@core/interceptors';
import Aura from '@primeng/themes/aura';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';

import APP_STORE from '@store/app.store';

import ROUTES from './app.routes';

export const APP_PROVIDERS: (Provider | EnvironmentProviders)[] = [
    provideHttpClient(),
    provideRouter(ROUTES),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: false
            }
        }
    }),
    APP_STORE,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    },
    MessageService
];

export default APP_PROVIDERS;
