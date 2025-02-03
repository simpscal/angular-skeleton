import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Listbox } from 'primeng/listbox';
import { ScrollPanel } from 'primeng/scrollpanel';

import { MenuItemModel } from './models';

const PRIMES = [ScrollPanel, Listbox];

@Component({
    selector: 'app-side-bar',
    imports: [CommonModule, RouterModule, ...PRIMES],
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarComponent {
    @Input() menuItems: MenuItemModel[] = [];
}
