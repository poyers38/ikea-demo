import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'groups'})
export class menuSubCategorysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    var menuSubCategorys = {};
    value.forEach(function(o) {
      var menuSubCategory = o.menuSubCategory;
      menuSubCategorys[menuSubCategory] = menuSubCategorys[menuSubCategory] ? menuSubCategorys[menuSubCategory] : { name: menuSubCategory, resources: [] };
      menuSubCategorys[menuSubCategory].resources.push(o);  
    });
        
    return Object.keys(menuSubCategorys).map(function (key) {return menuSubCategorys[key]});
  }
}
