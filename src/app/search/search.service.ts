import { Injectable } from '@angular/core';

import { Product } from '../product/product';
import { PRODUCTS } from '../product/product-data-mock/mock-product';
import { ProductCategory } from '../product/product-category/product-category.class';
import { PRODUCTCATEGORY } from '../product/product-data-mock/mock-product-category';
import { Search } from './search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  products: Product[];
  productCategories: ProductCategory[];
  private searches: Search[];
  productSearches: searches[];
  ProductCategorySearches: searches[];
  fruits = ["Banana", "Orange", "Apple", "Mango"];
  constructor() { 
	this.searches = [];
	this.products = PRODUCTS;
	this.productCategories = PRODUCTCATEGORY;
	this.productSearches = this.products.map(o => {
	  return { name: o.name, searchType: 'product' };
	});
	console.log('this.productSearches');
	console.log(this.productSearches);
	this.ProductCategorySearches = this.productCategories.map(o => {
	  return { name: o.name, searchType: 'product-category' };
	});
	this.searches.push(this.productSearches);
	//this.searches.push(this.ProductCategorySearches);
	console.log('this.fruits');
	
	this.fruits.push("Kiwi");
	console.log(this.fruits);
  }
  
  getSearches(): Search[]{
	return this.searches
  }
}
