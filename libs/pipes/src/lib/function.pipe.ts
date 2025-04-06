import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'libFunction',
    standalone: true
})
export class FunctionPipe implements PipeTransform {
    transform(value: any, handler: (...args: any[]) => any, ...args: any[]) {
        return handler(value, ...args);
    }
}
