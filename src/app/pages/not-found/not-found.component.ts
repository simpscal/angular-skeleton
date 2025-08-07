import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-not-found',
    imports: [CommonModule],
    templateUrl: './not-found.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent {
    private router = inject(Router);

    onNavigateToHome() {
        this.router.navigate(['/']);
    }
}
