import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MENU_ITEMS } from './constants';

import { HeaderComponent, SideBarComponent } from './components';

const COMPONENTS = [HeaderComponent, SideBarComponent];

@Component({
    selector: 'app-admin-layout',
    imports: [CommonModule, RouterModule, ...COMPONENTS],
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLayoutComponent {
    MENU_ITEMS = MENU_ITEMS;
}
