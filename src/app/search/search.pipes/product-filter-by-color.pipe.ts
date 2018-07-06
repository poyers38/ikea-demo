import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../product/product';

@Pipe({
  name: 'productFilterByColorPipe'
})
export class ProductFilterByColorPipe implements PipeTransform {
  transform(products: Product[], color: string): Product[] {
		if (color) 
			return products.filter(Product => Product.color.toLowerCase().indexOf(color.toLowerCase()) > -1);
		else
			return products;
  }
}
