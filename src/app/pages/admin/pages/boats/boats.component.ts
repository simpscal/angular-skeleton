import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoatViewModel } from '@app/pages/admin/models/boat';
import { DataViewModule } from 'primeng/dataview';

import { BoatService } from '../../services';

@Component({
    selector: 'app-admin-boats',
    imports: [CommonModule, RouterModule, DataViewModule],
    providers: [BoatService],
    templateUrl: './boats.component.html',
    styleUrl: './boats.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoatsComponent {
    private boatService = inject(BoatService);

    boats = signal<BoatViewModel[]>([]);

    constructor() {
        this.loadBoats();
    }

    loadBoats() {
        this.boatService.getBoats().subscribe((response: BoatViewModel[]) => this.boats.set(response));
    }
}
