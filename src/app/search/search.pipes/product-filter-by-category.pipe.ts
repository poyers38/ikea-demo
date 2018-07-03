import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilterByCategoryPipe',
  pure: false
})
export class ProductFilterByCategoryPipe implements PipeTransform {
  transform(products: Product[], productCategory: string): Product[] {
		if (productCategory) 
			return products.filter(Product => Product.menuCategory.toLowerCase().indexOf(productCategory.toLowerCase()) > -1);
		else
			return products;
  }
}
