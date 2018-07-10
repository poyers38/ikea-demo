import { Component, OnInit } from '@angular/core';

import { ProductCategory } from '../product-category/product-category.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-menu-category-mobile',
  templateUrl: './product-menu-category-mobile.component.html',
  styleUrls: ['./product-menu-category-mobile.component.scss']
})
export class ProductMenuCategoryMobileComponent implements OnInit {
	productCategories: ProductCategory[];
  constructor(
		private productService: ProductService
	) { }

  ngOnInit() {
		this.productCategories = this.productService.getProductCategories();
  }

}
