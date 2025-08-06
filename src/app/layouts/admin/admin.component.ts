import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent, SideBarComponent } from './components';
import { MENU_ITEMS } from './constants';

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
