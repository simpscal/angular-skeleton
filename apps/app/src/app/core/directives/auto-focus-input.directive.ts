import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appAutoFocusInput]',
    standalone: true
})
export class AutoFocusInputDirective implements AfterViewInit {
    @Input() inputOrder = 1;
    @Input() timeout = 1000;

    constructor(private _elementRef: ElementRef) {}

    ngAfterViewInit() {
        setTimeout(() => {
            const inputs = this._elementRef.nativeElement.querySelectorAll(
                'input:not([type="hidden"]), textarea, select'
            );

            if (inputs.length) {
                let inputIndex = this.inputOrder - 1;

                if (inputIndex < 0) {
                    inputIndex = 0;
                }

                inputs[inputIndex].focus();
            }
        }, this.timeout);
    }
}
