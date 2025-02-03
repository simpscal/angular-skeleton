import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BoatService } from './services';

@Component({
    selector: 'app-admin',
    imports: [RouterOutlet],
    providers: [BoatService],
    template: ` <router-outlet></router-outlet>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent {}
