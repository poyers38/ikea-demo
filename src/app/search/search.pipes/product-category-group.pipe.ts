import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'productCategoryGroup'})
export class productCategoryGroupPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    var menuCategorys = {};
    value.forEach(function(o) {
      var menuCategory = o.menuCategory;
      menuCategorys[menuCategory] = menuCategorys[menuCategory] ? menuCategorys[menuCategory] : { name: menuCategory, resources: [] };
      menuCategorys[menuCategory].resources.push(o);  
    });
        
    return Object.keys(menuCategorys).map(function (key) {return menuCategorys[key]});
  }
}
