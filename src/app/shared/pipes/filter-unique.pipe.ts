import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUnique',
  pure: false
})
export class FilterUniquePipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
        return items;
    }

    return items.filter(item => item.name.indexOf(filter.name) !== -1);
}

}
