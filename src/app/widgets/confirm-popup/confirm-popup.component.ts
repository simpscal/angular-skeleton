import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxPopoverComponent, DxPopoverModule } from 'devextreme-angular';
import { Position } from 'devextreme-angular/common';

import { ButtonComponent } from '../button/button.component';

const DEVEXTREMES = [DxPopoverModule];

const WIDGETS = [ButtonComponent];

@Component({
    selector: 'app-confirm-popup',
    imports: [CommonModule, ...DEVEXTREMES, ...WIDGETS],
    templateUrl: './confirm-popup.component.html',
    styleUrls: ['./confirm-popup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmPopupComponent {
    @ViewChild('popover') popover: DxPopoverComponent;

    @Input() title: string;
    @Input() message: string;
    @Input() position: Position = 'bottom';
    @Input() width: 'auto' | number = 'auto';

    @Output() confirmed = new EventEmitter<void>();
    @Output() canceled = new EventEmitter<void>();
    @Output() hidden = new EventEmitter<void>();

    constructor() {}

    onConfirm() {
        this.popover.instance.hide();
        this.confirmed.emit();
    }

    onCancel() {
        this.popover.instance.hide();
        this.canceled.emit();
    }

    onHidden() {
        this.hidden.emit();
    }

    onClose() {
        this.popover.instance.hide();
    }
}
