import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-not-found',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './not-found.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent {
    constructor(private _router: Router) {}

    onNavigateToHome() {
        this._router.navigate(['/']);
    }
}
