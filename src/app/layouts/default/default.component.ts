import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-default-layout',
    styleUrl: './default.component.scss',
    imports: [CommonModule, RouterModule],
    templateUrl: './default.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent {}
