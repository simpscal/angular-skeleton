import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { PAGE_ROUTES } from '@app/shared/constants';
import { AuthViewModel } from '@app/shared/models';

import { AuthService } from '@core/services';

const MODULES = [CommonModule, RouterModule, FormsModule, ReactiveFormsModule];
const PRIMES = [ButtonModule, InputTextModule];

@Component({
    selector: 'app-login',
    imports: [...MODULES, ...PRIMES],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
    PAGE_ROUTES = PAGE_ROUTES;

    form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    get isFormValid() {
        return this.form.status === 'VALID';
    }

    constructor(
        private _router: Router,
        private _authService: AuthService
    ) {}

    onLogin() {
        this._authService.login(new AuthViewModel(this.form.value)).subscribe(() => {
            this._router.navigate(['/']).then();
        });
    }
}
