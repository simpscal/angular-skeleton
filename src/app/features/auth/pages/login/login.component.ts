import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

import { AuthViewModel } from '@app/shared/models';

import { AuthService } from '@core/services';

const MODULES = [CommonModule, RouterModule, FormsModule, ReactiveFormsModule];
const PRIMES = [ButtonModule, InputTextModule, MessageModule];

@Component({
    selector: 'app-login',
    imports: [...MODULES, ...PRIMES],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
    form = this._formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
    });

    get isFormValid() {
        return this.form.status === 'VALID';
    }

    constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _authService: AuthService
    ) {}

    onLogin() {
        this._authService.login(new AuthViewModel(this.form.value)).subscribe(() => {
            this._router.navigate(['/']).then();
        });
    }
}
