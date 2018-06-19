import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-product';
import { ProductImage } from './product-image';
import { PRODUCTIMAGES } from './mock-product-image';
import { ProductCategory } from './product-category/product-category.class';
import { PRODUCTCATEGORY } from './mock-product-category';
import { ProductModule } from './product.module';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  public displayViewOption: boolean;
  products: Product[];
  productCategories: ProductCategory[];
  private productImages: ProductImage[];
  mobileDefaultViewType: string; 
  
  productViewTypeSource = new BehaviorSubject<string>("");
  productViewType$ = this.productViewTypeSource.asObservable();
  
  productParentUrlSource = new BehaviorSubject<string>("");
  productParentUrl$ = this.productParentUrlSource.asObservable();
  productParentUrl: string;
  deviceTypeSource = new BehaviorSubject<string>("");
  deviceType$ = this.deviceTypeSource.asObservable();
  deviceType: string;
  
  constructor() { 
	this.displayViewOption = true;
	this.productViewTypeSource.next('product-grid');
	this.deviceTypeSource.next('pc');
	this.productParentUrlSource.next('shop');
	this.mobileDefaultViewType = 'product-list';
  }
  
  getProducts() : Product[] {
	return PRODUCTS;
  }
 
  getProduct(id: number) : Product[] {
	this.products = PRODUCTS;
	return PRODUCTS.filter(Product => Product['id'] == id);
  }
  
  getProductCategories() : ProductCategory[] {
	return PRODUCTCATEGORY;
  }
  
  getProductImages() : ProductImage[] {
	return PRODUCTIMAGES;
  }
  
  changeProductViewType(data: string) {
	console.log('deviceType: ' + this.deviceType);
	let newProductViewType = data;
    if (this.deviceType == 'mobile') {
		newProductViewType = this.mobileDefaultViewType;
		//console.log(newProductViewType);
	}
	this.productViewTypeSource.next(newProductViewType);
  }
  
  changeWindowSize(size: number) {
	if (size < 991) {
		this.deviceType = 'mobile';
		this.productParentUrl = 'm.shop';
		this.productViewTypeSource.next(this.mobileDefaultViewType);
	}
	else {
		this.deviceType = 'pc';
		this.productParentUrl = 'shop';
	}
	//console.log('this.productParentUrl: ' + this.productParentUrl);
	this.deviceTypeSource.next(this.deviceType);
	this.productParentUrlSource.next(this.productParentUrl);
  }
  
}
