import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import APP_PROVIDERS from './app/app.providers';

if (environment.isProduction) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: APP_PROVIDERS
}).catch((error) => console.error(error));
