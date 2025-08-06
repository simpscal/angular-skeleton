import { inject, Injectable } from '@angular/core';
import { ApiService } from '@core/services';
import { delay, of } from 'rxjs';

import { BoatViewModel } from '../models/boat';

@Injectable()
export class BoatService {
    private _apiService = inject(ApiService);

    getBoats() {
        return this._apiService.get<BoatViewModel[]>('boats').pipe(delay(1000));
    }

    getBoat(id: string) {
        return this._apiService.get<BoatViewModel>(`boats/${id}`).pipe(delay(1000));
    }

    saveBoat(boat: BoatViewModel) {
        return of(boat);
    }

    deleteBoat(id: string) {
        return of(id);
    }
}
