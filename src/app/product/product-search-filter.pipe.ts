import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productSearchFilterPipe',
  pure: false
})
export class ProductSearchFilterPipe implements PipeTransform {
  transform(products: Product[], input: string): Product[] {
	if (input) {
		input = input.toLowerCase();
		return products.filter(Product => Product.desc.toLowerCase().indexOf(input) > -1 || 
			Product.name.toLowerCase().indexOf(input) > -1 ||
			Product.menuCategory.toLowerCase().indexOf(input) > -1 ||
			Product.menuSubCategory.toLowerCase().indexOf(input) > -1
		);
	}
	else {
		return products.filter(Product => Product.desc.toLowerCase().indexOf("xxxxxxxxxxxxxxx") > -1);
	}
  }
}
