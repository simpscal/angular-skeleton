import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserProfileService {
    getUserProfile() {
        return of();
    }

    updateUserProfile() {
        return of();
    }

    uploadAvatar() {
        return of();
    }
}
