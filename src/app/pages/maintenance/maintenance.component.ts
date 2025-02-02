import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-page-maintenance',
    imports: [CommonModule],
    templateUrl: './maintenance.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageMaintenanceComponent {}
