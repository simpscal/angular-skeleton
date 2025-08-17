import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    imports: [RouterModule],
    selector: 'app-parent-entry',
    template: `<router-outlet></router-outlet>`
})
export class RemoteEntryComponent {}
