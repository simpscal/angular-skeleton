import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

import { ApiService } from '@core/services';

import { BoatViewModel } from '../models/boat';

@Injectable()
export class BoatService {
    constructor(private _apiService: ApiService) {}

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
