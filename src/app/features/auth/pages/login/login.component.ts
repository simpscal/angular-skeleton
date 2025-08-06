import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthViewModel } from '@app/shared/models';
import { AuthService } from '@core/services';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

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
    private _router = inject(Router);
    private _formBuilder = inject(FormBuilder);
    private _authService = inject(AuthService);

    form = this._formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
    });

    get isFormValid() {
        return this.form.status === 'VALID';
    }

    onLogin() {
        this._authService.login(new AuthViewModel(this.form.value)).subscribe(() => {
            this._router.navigate(['/']).then();
        });
    }
}
