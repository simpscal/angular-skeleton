import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    ElementRef,
    HostBinding,
    inject,
    input
} from '@angular/core';

@Component({
    selector: 'app-svg-icon',
    imports: [CommonModule],
    template: ` <ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent {
    private elementRef = inject(ElementRef);

    data = input<string>('');
    width = input<string>('5rem');
    color = input<string>('');

    @HostBinding('style.display') displayStyle = 'block';
    @HostBinding('style.width') widthStyle = computed(() => this.width());
    @HostBinding('style.color') colorStyle = computed(() => this.color());

    constructor() {
        effect(() => {
            if (this.data()) {
                this.generateIcon();
            }
        });
    }

    private generateIcon() {
        const element = this.elementRef.nativeElement;
        element.innerHTML = '';

        const div = document.createElement('div');
        div.innerHTML = this.data();

        const svg = div.querySelector('svg');
        if (svg) {
            element.appendChild(svg);
        }
    }
}
