import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toolbar } from 'primeng/toolbar';

@Component({
    selector: 'app-header',
    imports: [CommonModule, Toolbar],
    templateUrl: 'header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
