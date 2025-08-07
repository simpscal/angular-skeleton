import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PAGE_ROUTES } from '@app/shared/constants';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { finalize } from 'rxjs';

import { BoatViewModel } from '../../models/boat';
import { BoatService } from '../../services';

const PRIMES = [ButtonModule, InputTextModule, FormsModule];

@Component({
    selector: 'app-boat-details',
    imports: [CommonModule, ...PRIMES],
    providers: [BoatService],
    templateUrl: './boat-details.component.html',
    styleUrl: './boat-details.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoatDetailsComponent {
    private router = inject(Router);
    private activatedRouter = inject(ActivatedRoute);
    private boatService = inject(BoatService);

    ID = this.activatedRouter.snapshot.params['id'];

    isLoading = signal(false);
    isConfirmationPopupVisible = signal(false);

    boat = signal(new BoatViewModel());

    constructor() {
        this.getBoatDetails();
    }

    getBoatDetails() {
        this.isLoading.set(true);

        this.boatService
            .getBoat(this.ID)
            .pipe(finalize(() => this.isLoading.set(false)))
            .subscribe((boat: BoatViewModel) => {
                this.boat.set(boat);
            });
    }

    onDeleteBoatClicked() {
        this.isConfirmationPopupVisible.set(true);
    }

    onDeleteBoat = () => {
        this.isLoading.set(true);

        this.boatService
            .deleteBoat(this.ID)
            .pipe(finalize(() => this.isLoading.set(false)))
            .subscribe(() => {
                this.router.navigate([PAGE_ROUTES.ADMIN_BOATS]);
            });
    };
}
