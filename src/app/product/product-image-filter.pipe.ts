import { Pipe, PipeTransform } from '@angular/core';
import { ProductImage } from './product-image';

@Pipe({
  name: 'productImageFilterPipe'
})
export class ProductImageFilterPipe implements PipeTransform {

  transform(productImage: ProductImage[], args?: any): ProductImage[] {
    return productImage.filter(ProductImage => ProductImage.productId == args);
  }

}
