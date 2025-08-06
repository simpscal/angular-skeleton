import { afterNextRender, Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
    selector: '[appAutoFocusInput]',
    standalone: true
})
export class AutoFocusInputDirective {
    private _elementRef = inject(ElementRef);

    inputOrder = input<number>(1);
    timeout = input<number>(1000);

    constructor() {
        afterNextRender(() => {
            setTimeout(() => {
                const inputs = this._elementRef.nativeElement.querySelectorAll(
                    'input:not([type="hidden"]), textarea, select'
                );

                if (inputs.length) {
                    let inputIndex = this.inputOrder() - 1;

                    if (inputIndex < 0) {
                        inputIndex = 0;
                    } else if (inputIndex >= inputs.length) {
                        inputIndex = inputs.length - 1;
                    }

                    inputs[inputIndex].focus();
                }
            }, this.timeout());
        });
    }
}
