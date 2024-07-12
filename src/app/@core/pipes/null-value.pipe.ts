import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
    name: 'appNullValue',
    standalone: true
})
export class NullValuePipe implements PipeTransform {
    transform(value: any): any {
        if (!value) {
            return '-';
        }

        switch (typeof value) {
            case 'string':
                return value.trim() ? value : '-';
            default:
                return value;
        }
    }
}
