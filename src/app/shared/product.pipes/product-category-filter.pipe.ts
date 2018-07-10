import { Pipe, PipeTransform } from '@angular/core';
import { ProductCategory } from '../../product/product-category/product-category';

@Pipe({
  name: 'productCategoryFilterPipe',
  pure: false
})
export class ProductCategoryFilterPipe implements PipeTransform {
  transform(productCategory: ProductCategory[], data: string): ProductCategory[] {
		if (productCategory) 
			return productCategory.filter(ProductCategory => ProductCategory.category.toLowerCase().indexOf(data.toLowerCase()) > -1);
		else
			return productCategory;
  }
}
