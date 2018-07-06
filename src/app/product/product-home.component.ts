import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbsService } from 'ng6-breadcrumbs';
import { Subscription } from 'rxjs';

import { ProductService } from './product.service';
import { ProductCategory } from './product-category/product-category.class';

class ProdCatProps {
	productCategory: ProductCategory[];
	parentUrl: string;
	productViewType: string;
}

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit, OnDestroy {
	private breadcrumb: any[];
	productCategories: ProductCategory[];
	private subProductViewType : Subscription;
	productViewType: string;
	parentUrl: string;
	prodCatProps: ProdCatProps[];
	private subProductParentUrl: Subscription;
	
	constructor(
		private breadcrumbsService: BreadcrumbsService,
		private productService: ProductService
	) { 
		this.subProductViewType = this.productService.productViewType$.subscribe(
			(data: string) => {
				this.productViewType = data;
			}
		)
		this.subProductParentUrl = this.productService.productParentUrl$.subscribe(
			(data: string) => {
				this.parentUrl = data;
				this.addBreadcrumb();
			}
		)
	}

	ngOnInit() {
		this.addBreadcrumb();
		this.productCategories = this.productService.getProductCategories();
		console.log('HOME');
		console.log(this.productCategories);
	}
	
	addBreadcrumb() {
		this.breadcrumb = [];
		this.breadcrumbsService.store(this.breadcrumb);
	}
	
	ngOnDestroy() {
		this.subProductViewType.unsubscribe();
		this.subProductParentUrl.unsubscribe();
	}
	  
}
