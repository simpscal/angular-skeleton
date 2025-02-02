import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxToolbarModule } from 'devextreme-angular';

const DEVEXTREMES = [DxToolbarModule];

@Component({
    selector: 'app-header',
    imports: [CommonModule, ...DEVEXTREMES],
    templateUrl: 'header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
