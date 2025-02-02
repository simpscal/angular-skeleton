import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sign-up',
    imports: [CommonModule],
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {}
