import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { finalize, firstValueFrom, map } from 'rxjs';
import DataSource from 'devextreme/data/data_source';
import { DxDataGridModule, DxLoadPanelModule } from 'devextreme-angular';

import { FilterModel } from '@app/shared/models';

import { BoatService } from '../../services';

const DEVEXTREMES = [DxDataGridModule, DxLoadPanelModule];

@Component({
    selector: 'app-admin-boats',
    imports: [CommonModule, RouterModule, ...DEVEXTREMES],
    providers: [BoatService],
    templateUrl: './boats.component.html',
    styleUrl: './boats.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoatsComponent implements OnInit {
    isLoading = signal(false);
    isInitialized = signal(false);

    dataSource: DataSource;
    filters: FilterModel = {};

    constructor(private _boatService: BoatService) {}

    ngOnInit() {
        this.loadBoats();
    }

    loadBoats() {
        this.dataSource = new DataSource({
            load: (loadOptions) => {
                this.isLoading.set(true);

                this.filters.skip = loadOptions.skip;
                this.filters.take = loadOptions.take;

                return firstValueFrom(
                    this._boatService.getBoats().pipe(
                        map((response) => ({ data: response, totalCount: response.length })),
                        finalize(() => {
                            this.isLoading.set(false);
                            this.isInitialized.set(true);
                        })
                    )
                );
            }
        });
    }

    onSearchBoat(value: string) {
        this.filters.keyword = value;

        this.dataSource.reload();
    }
}
