import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { PAGE_ROUTES } from '@app/shared/constants';

import { BoatService } from '../../services';

import { BoatViewModel } from '../../models/boat';

const PRIMES = [ButtonModule, InputTextModule, FormsModule];

@Component({
    selector: 'app-boat-details',
    imports: [CommonModule, ...PRIMES],
    providers: [BoatService],
    templateUrl: './boat-details.component.html',
    styleUrl: './boat-details.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoatDetailsComponent implements OnInit {
    ID = this._activatedRouter.snapshot.params['id'];

    isLoading = signal(false);
    isConfirmationPopupVisible = signal(false);

    boat = signal(new BoatViewModel());

    constructor(
        private _router: Router,
        private _activatedRouter: ActivatedRoute,
        private _boatService: BoatService
    ) {}

    ngOnInit() {
        this.getBoatDetails();
    }

    getBoatDetails() {
        this.isLoading.set(true);

        this._boatService
            .getBoat(this.ID)
            .pipe(finalize(() => this.isLoading.set(false)))
            .subscribe((boat) => {
                this.boat.set(boat);
            });
    }

    onDeleteBoatClicked() {
        this.isConfirmationPopupVisible.set(true);
    }

    onDeleteBoat = () => {
        this.isLoading.set(true);

        this._boatService
            .deleteBoat(this.ID)
            .pipe(finalize(() => this.isLoading.set(false)))
            .subscribe(() => {
                this._router.navigate([PAGE_ROUTES.ADMIN_BOATS]);
            });
    };
}
