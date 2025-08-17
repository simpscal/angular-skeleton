import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { errorHandlingInterceptor } from 'core';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(appRoutes),
        provideHttpClient(withInterceptors([errorHandlingInterceptor])),
        providePrimeNG({
            theme: {
                preset: definePreset(Aura, {}),
                options: {
                    darkModeSelector: '[data-mode="dark"]'
                }
            }
        }),
        MessageService
    ]
};
