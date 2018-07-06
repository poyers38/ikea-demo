import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { BreadcrumbsService } from 'ng6-breadcrumbs';
import { ProductCategory } from './product-category.class';
import { PRODUCTCATEGORY } from '../product-data-mock/mock-product-category';
import { ProductService } from '../product.service';
import { Product } from '../product';

class ProdCatProps {
	productCategory: ProductCategory[];
	parentUrl: string;
	productViewType: string;
}

@Component({
  selector: 'app-product-category-selection',
  templateUrl: './product-category-selection.component.html',
  styleUrls: ['./product-category-selection.component.scss']
})
export class ProductCategorySelectionComponent implements OnInit, OnDestroy {
	category: string;
	private products: Product[];
	productCategories: ProductCategory[];
	private breadcrumb: any[];
	private displayViewOption: boolean;
	deviceType: string;
	private productViewType: string;
	private parentUrl: string;
	prodCatProps: ProdCatProps[];
	private subRouterEvents: Subscription;
	private subRouterParams: Subscription;
	private subProductParentUrl: Subscription;
	private subDeviceType: Subscription;
	private subProductViewType: Subscription; 
	
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private productService: ProductService,
		private breadcrumbsService: BreadcrumbsService
	) {
	
		this.subRouterEvents = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((route: ActivatedRoute) => {
			this.addBreadcrumb();
        });

		this.subDeviceType = this.productService.deviceType$.subscribe(
			(data: string) => {
				this.deviceType = data;
			}
		)
		this.subProductParentUrl = this.productService.productParentUrl$.subscribe(
			(data: string) => {
				this.parentUrl = data;
				this.addBreadcrumb();
			}
		)
		this.subProductViewType = this.productService.productViewType$.subscribe(
			(data: string) => {
				this.productViewType = data;
				this.addBreadcrumb();
			}
		)
	}

  ngOnInit() : void {
		this.productCategories = this.productService.getProductCategories();
		this.addBreadcrumb();
		console.log(this.productCategories);
  }
  
  addBreadcrumb() {
		this.subRouterParams = this.route.params.subscribe(params => {
			this.category = params['productCategory']; 
		});
		if (this.category == undefined) 
			this.category = '';
			
		this.products = this.productService.getProducts();
		this.breadcrumb = [
			{label: 'products' , url: '/' + this.parentUrl + '/products/', params: []},
			{label: this.category.toLowerCase() , url: '', params: []},
		];
		console.log('cat sel: ' + this.breadcrumb);
		this.breadcrumbsService.store(this.breadcrumb);
  }
   
	removeBreadcrumb() {
		this.breadcrumb = [];
		this.breadcrumbsService.store(this.breadcrumb);
		console.log('ngOnDestroy breadcrumb');
	}

	ngOnDestroy() {
		this.subRouterEvents.unsubscribe();
		this.subRouterParams.unsubscribe();
		this.subProductParentUrl.unsubscribe();
		this.subDeviceType.unsubscribe();
		this.subProductViewType.unsubscribe();
		this.removeBreadcrumb();
	}
}
