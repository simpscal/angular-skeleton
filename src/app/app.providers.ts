import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { EnvironmentProviders, Provider } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { authInterceptor, errorHandlingInterceptor } from '@core/interceptors';
import APP_STORE_PROVIDERS from '@store/app.store';

import PRIMENG_PROVIDERS from './@primeng/primeng.providers';
import ROUTES from './app.routes';

export const APP_PROVIDERS: (Provider | EnvironmentProviders)[] = [
    provideHttpClient(withInterceptors([errorHandlingInterceptor, authInterceptor])),
    provideRouter(ROUTES),
    provideAnimationsAsync(),
    ...PRIMENG_PROVIDERS,
    ...APP_STORE_PROVIDERS
];

export default APP_PROVIDERS;
