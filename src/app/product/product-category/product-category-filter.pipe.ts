import { Pipe, PipeTransform } from '@angular/core';
import { ProductCategory } from './product-category.class';

@Pipe({
  name: 'productCategoryFilterPipe'
})
export class ProductCategoryFilterPipe implements PipeTransform {

  transform(productCategories: ProductCategory[], args?: any): ProductCategory[] {
    return productCategories.filter(ProductCategory => ProductCategory.category.toLowerCase() == args.toLowerCase());
  }

}
