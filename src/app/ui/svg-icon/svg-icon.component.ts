import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-svg-icon',
    imports: [CommonModule],
    template: ` <ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent implements OnInit {
    @HostBinding('style.display') displayStyle = 'block';
    @HostBinding('style.width') widthStyle = '';
    @HostBinding('style.color') colorStyle = '';

    @Input() data = '';
    @Input() width = '5rem';
    @Input() color = '';

    constructor(private _elementRef: ElementRef) {}

    ngOnInit() {
        this.widthStyle = this.width;
        this.colorStyle = this.color;

        this.generateIcon();
    }

    generateIcon() {
        const div = document.createElement('div');
        div.innerHTML = this.data ?? '';

        this._elementRef.nativeElement.appendChild(div.querySelector('svg'));
    }
}
