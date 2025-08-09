import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar?: string;
    role: string;
}

@Component({
    selector: 'app-user-profile',
    standalone: true,
    imports: [CommonModule, AvatarModule, BadgeModule, ButtonModule, CardModule, TagModule],
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
    user = input.required<User>();
    showActions = input(true);
    isEditable = input(false);

    editUser = output<User>();
    deleteUser = output<string>();
    viewDetails = output<User>();

    fullName = computed(() => {
        const user = this.user();
        return `${user.firstName} ${user.lastName}`;
    });

    initials = computed(() => {
        const user = this.user();
        return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();
    });

    onEdit() {
        this.editUser.emit(this.user());
    }

    onDelete() {
        this.deleteUser.emit(this.user().id);
    }

    onViewDetails() {
        this.viewDetails.emit(this.user());
    }

    getRoleSeverity(role: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
        switch (role.toLowerCase()) {
            case 'admin':
                return 'danger';
            case 'user':
                return 'success';
            case 'moderator':
                return 'warn';
            case 'guest':
                return 'secondary';
            default:
                return 'info';
        }
    }
}
