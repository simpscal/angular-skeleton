import { inject, Injectable } from '@angular/core';
import { AuthViewModel } from '@app/shared/models';
import { delay, of } from 'rxjs';

import { ApiService } from './api.service';

const EXAMPLE_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxMTEwMzg5OTk5OX0.0FAYr7bWrVXQb1MqATfNMjE8B3djQ61nfAtHaBOzL-c';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiService = inject(ApiService);

    refreshAccessToken() {
        return of(EXAMPLE_TOKEN);
    }

    login(auth: AuthViewModel) {
        return this.apiService.post('auth', auth.toRequest()).pipe(delay(1000));
    }
}
