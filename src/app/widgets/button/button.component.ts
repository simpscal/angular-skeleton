import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule } from 'devextreme-angular';

import { ButtonType } from './enums';

const DEVEXTREMES = [DxButtonModule];

@Component({
    selector: 'app-button',
    imports: [CommonModule, ...DEVEXTREMES],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    @Input() height: number | string = '100%';
    @Input() width: number | string = '100%';
    @Input() text = 'Save';
    @Input() icon: string;
    @Input() disabled = false;
    @Input() hidden = false;
    @Input() isLoading = false;
    @Input() type: ButtonType = 'primary';

    @Output() clicked = new EventEmitter<PointerEvent>();

    onClicked(event: any) {
        this.clicked.emit(event);
    }
}
