import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BoatViewModel } from '@app/features/admin/models/boat';
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
export class BoatsComponent implements OnInit {
    boats = signal<BoatViewModel[]>([]);

    constructor(private _boatService: BoatService) {}

    ngOnInit() {
        this.loadBoats();
    }

    loadBoats() {
        this._boatService.getBoats().subscribe((response) => this.boats.set(response));
    }
}
