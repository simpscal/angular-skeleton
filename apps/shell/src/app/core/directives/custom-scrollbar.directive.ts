import { Directive, ElementRef, HostBinding, NgZone, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Directive({
    selector: '[appCustomScrollbar]',
    standalone: true
})
export class CustomScrollbarDirective implements OnInit, OnDestroy {
    @HostBinding('class.custom-scroll') customScroll = true;

    constructor(
        private _element: ElementRef,
        private _ngZone: NgZone
    ) {}

    SCROLLBAR_WIDTH = 11;

    private _subscriptions = new Subscription();

    ngOnInit() {
        this.subscribeMouseMove();
    }

    ngOnDestroy() {
        this._subscriptions.unsubscribe();
    }

    subscribeMouseMove() {
        this._ngZone.runOutsideAngular(() => {
            this._subscriptions.add(
                fromEvent(this._element.nativeElement, 'mousemove').subscribe((event) => {
                    this.onVerticalBarHovered(event as MouseEvent);
                    this.onHorizontalBarHover(event as MouseEvent);
                })
            );
        });
    }

    onVerticalBarHovered(event: MouseEvent) {
        const containerWidth = this._element.nativeElement.offsetWidth;
        const mouseX = event.offsetX;
        const gap = containerWidth - mouseX;

        if (gap <= this.SCROLLBAR_WIDTH && gap >= 0) {
            this._element.nativeElement.classList.add('vertical-custom-scroll--hovered');
        } else {
            this._element.nativeElement.classList.remove('vertical-custom-scroll--hovered');
        }
    }

    onHorizontalBarHover(event: MouseEvent) {
        const containerHeight = this._element.nativeElement.offsetHeight;
        const mouseY = event.offsetY;
        const gap = containerHeight - mouseY;

        if (gap <= this.SCROLLBAR_WIDTH && gap >= 0) {
            this._element.nativeElement.classList.add('horizontal-custom-scroll--hovered');
        } else {
            this._element.nativeElement.classList.remove('horizontal-custom-scroll--hovered');
        }
    }
}
