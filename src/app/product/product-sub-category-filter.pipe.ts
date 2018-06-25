import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productBySubCategoryFilterPipe'
})
export class ProductBySubCategoryFilterPipe implements PipeTransform {

  transform(products: Product[], args?: any): Product[] {
    return products.filter(Product => Product.menuSubCategory.toLowerCase() == args.toLowerCase());
  }

}
