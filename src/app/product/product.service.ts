import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './product-data-mock/mock-product';
import { ProductImage } from './product-image';
import { Search } from '../search/search';
import { PRODUCTIMAGES } from './product-data-mock/mock-product-image';
import { ProductCategory } from './product-category/product-category.class';
import { PRODUCTCATEGORY } from './product-data-mock/mock-product-category';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  public displayViewOption: boolean;
  products: Product[];
  productCategories: ProductCategory[];
  private productImages: ProductImage[];
  private searches: Search[];
  
  mobileDefaultViewType: string; 
  
  productViewTypeSource = new BehaviorSubject<string>("");
  productViewType$ = this.productViewTypeSource.asObservable();
  
  productParentUrlSource = new BehaviorSubject<string>("");
  productParentUrl$ = this.productParentUrlSource.asObservable();
  productParentUrl: string;
  
  deviceTypeSource = new BehaviorSubject<string>("");
  deviceType$ = this.deviceTypeSource.asObservable();
  deviceType: string;
  
  isSearchBarMobileOpenSource = new BehaviorSubject<boolean>(false);
  isSearchBarMobileOpen$ = this.isSearchBarMobileOpenSource.asObservable();
  isSearchBarMobileOpen: boolean;
  
  isSearchBarOpenSource = new BehaviorSubject<boolean>(false);
  isSearchBarOpen$ = this.isSearchBarOpenSource.asObservable();
  isSearchBarOpen: boolean;
  
  searchKeywordSource = new BehaviorSubject<string>("");
  searchKeyword$ = this.searchKeywordSource.asObservable();
  searchKeyword: string;
  
  prevProdSearchSource = new BehaviorSubject<string>("");
  prevProdSearch$ = this.prevProdSearchSource.asObservable();
  prevProdSearch: string;
  
  prevUrlSource = new BehaviorSubject<string>("");
  prevUrl$ = this.prevUrlSource.asObservable();
  prevUrl: string;
  
  constructor() { 
		this.displayViewOption = true;
		this.productViewTypeSource.next('product-grid');
		this.deviceTypeSource.next('pc');
		this.productParentUrlSource.next('ikea');
		this.isSearchBarMobileOpenSource.next(false);
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
  
  getProductImage(prodId: number) : ProductImage[] {
		console.log('prodId' + prodId);
		return PRODUCTIMAGES.filter(ProductImage => ProductImage['productId'] == prodId);
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
		this.productParentUrl = 'm.ikea';
		this.productViewTypeSource.next(this.mobileDefaultViewType);
	}
	else {
		this.deviceType = 'pc';
		this.productParentUrl = 'ikea';
	}
		//console.log('this.productParentUrl: ' + this.productParentUrl);
		this.deviceTypeSource.next(this.deviceType);
		this.productParentUrlSource.next(this.productParentUrl);
  }
  
  changeSearchBar(data: boolean) {
		this.isSearchBarOpenSource.next(data);
  }
  
  changeSearchBarMobile(data: boolean) {
		this.isSearchBarMobileOpenSource.next(data);
  }
  
  changePrevUrl(data: string) {
		this.prevUrlSource.next(data);
  }
  
  changePrevProdSearch(data: string) {
		this.prevProdSearchSource.next(data);
  }
  
  changeSearchKeyword(data: string) {
		this.searchKeywordSource.next(data);
  }
}
