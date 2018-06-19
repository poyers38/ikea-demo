import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from 'ng6-breadcrumbs';
import { ProductService } from './product.service';
import { ProductCategory } from './product-category/product-category.class';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {
	private breadcrumb: any[];
	productCategories: ProductCategory[];
	
	constructor(
		private breadcrumbsService: BreadcrumbsService,
		private productService: ProductService
	) { 
	}

	ngOnInit() {
		this.addBreadcrumb();
		this.productCategories = this.productService.getProductCategories();
	}
	
	addBreadcrumb() {
		this.breadcrumb = [];
		this.breadcrumbsService.store(this.breadcrumb);
	}

	  
}
