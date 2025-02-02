import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DxListModule, DxScrollViewModule } from 'devextreme-angular';

import { MenuItemModel } from './models';

const DEVEXTREMES = [DxScrollViewModule, DxListModule];

@Component({
    selector: 'app-side-bar',
    imports: [CommonModule, RouterModule, ...DEVEXTREMES],
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarComponent {
    @Input() menuItems: MenuItemModel[] = [];
}
