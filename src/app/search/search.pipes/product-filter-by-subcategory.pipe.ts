import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilterBySubCategoryPipe',
  pure: false
})
export class ProductFilterBySubCategoryPipe implements PipeTransform {
  transform(products: Product[], productSubCategory: string): Product[] {
		if (productSubCategory) 
			return products.filter(Product => Product.menuSubCategory.toLowerCase().indexOf(productSubCategory.toLowerCase()) > -1);
		else
			return products;
  }
}
