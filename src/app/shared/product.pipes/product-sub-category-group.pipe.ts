import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'productSubCategoryGroup'})
export class productSubCategoryGroupPipe implements PipeTransform {
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
