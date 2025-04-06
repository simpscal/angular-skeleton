import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';
import { AppComponent } from '@shell/app.component';
import APP_PROVIDERS from '@shell/app.providers';

if (environment.isProduction) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: APP_PROVIDERS
}).catch((error) => console.error(error));
