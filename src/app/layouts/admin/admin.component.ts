import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DxScrollViewModule } from 'devextreme-angular';

import { MENU_ITEMS } from './constants';

import { FooterComponent, HeaderComponent, SideBarComponent } from './components';

const DEVEXTREMES = [DxScrollViewModule];
const COMPONENTS = [HeaderComponent, FooterComponent, SideBarComponent];

@Component({
    selector: 'app-admin-layout',
    imports: [CommonModule, RouterModule, ...DEVEXTREMES, ...COMPONENTS],
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLayoutComponent {
    MENU_ITEMS = MENU_ITEMS;
}
