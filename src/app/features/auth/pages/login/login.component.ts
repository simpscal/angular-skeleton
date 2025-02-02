import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
import { ButtonComponent } from '@widgets';

import { EMAIL_REGEX, PAGE_ROUTES } from '@app/shared/constants';
import { AuthViewModel } from '@app/shared/models';

import { AuthService } from '@core/services';

const DEVEXTREMES = [DxTextBoxModule, DxValidatorModule];

const WIDGETS = [ButtonComponent];

@Component({
    selector: 'app-login',
    imports: [CommonModule, RouterModule, ...DEVEXTREMES, ...WIDGETS],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
    EMAIL_REGEX = EMAIL_REGEX;
    PAGE_ROUTES = PAGE_ROUTES;

    validationGroup = {
        email: false,
        password: false,
        isValidated: false
    };

    form = new AuthViewModel();

    constructor(
        private _router: Router,
        private _authService: AuthService
    ) {}

    onValidated(event: { isValid: boolean }, field: 'email' | 'password') {
        this.validationGroup[field] = event.isValid;
        this.validationGroup.isValidated = this.validationGroup.email && this.validationGroup.password;
    }

    onLogin() {
        this._authService.login(this.form).subscribe(() => {
            this._router.navigate(['/']);
        });
    }
}
