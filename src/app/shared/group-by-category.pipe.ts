import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'groupByCategory'})
export class groupByCategory implements PipeTransform {
  transform(value, args:string[]) : any {
    var categories = {};
    value.forEach(function(o) {
      var category = o.category;
      categories[category] = categories[category] ? categories[category] : { category: category, resources: [] };
      categories[category].resources.push(o);  
    });
        
    return Object.keys(categories).map(function (key) {return categories[key]});
  }
}
