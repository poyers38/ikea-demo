import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'groupByMenuCategory'})
export class groupByMenuCategory implements PipeTransform {
  transform(value, args:string[]) : any {
    var menuCategories = {};
    value.forEach(function(o) {
      var menuCategory = o.menuCategory;
      menuCategories[menuCategory] = menuCategories[menuCategory] ? menuCategories[menuCategory] : { menuCategory: menuCategory, resources: [] };
      menuCategories[menuCategory].resources.push(o);  
    });
        
    return Object.keys(menuCategories).map(function (key) {return menuCategories[key]});
  }
}
