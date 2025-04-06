import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'libOrderBy',
    standalone: true
})
export class OrderByPipe implements PipeTransform {
    transform(array: any[], field: string, asc = true) {
        if (!Array.isArray(array)) {
            return [];
        }

        array.sort((current: any, next: any) => {
            if (current[field] < next[field]) {
                return asc ? -1 : 1;
            }

            return asc ? 1 : -1;
        });

        return array;
    }
}
