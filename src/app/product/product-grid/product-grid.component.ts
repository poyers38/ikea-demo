import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError, Event } from '@angular/router';
import { BreadcrumbsService } from 'ng6-breadcrumbs';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Product } from '../product';
import { ProductCategory } from '../product-category/product-category.class';
import { PRODUCTS } from '../product-data-mock/mock-product';
import { ProductService } from '../product.service';

class Props {
	products: Product[];
	detailUrl: string;
}

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html'
})

export class ProductGridComponent implements OnDestroy {
	products: Product[];
	productCategories: ProductCategory[];
	category: string;
	querySubCategory: string;
	private subDeviceType: Subscription;
	private subProductParentUrl: Subscription;
	private subProductViewType: Subscription;
	private subRouterEvents: Subscription;
	private subRouterParams: Subscription;
	private subRouterQueryParams: Subscription;
	private subparentUrl: Subscription;
	private breadcrumb: any[];
	private detailUrl: string;
	productViewType: string;
	productViewType2: string;
	myProps: Props[];
	parentUrl: string;
	deviceType: string;
	
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private productService: ProductService,
		private breadcrumbsService: BreadcrumbsService
	)
	{ 
		this.subRouterParams = this.route.params.subscribe(params => {
			this.category = params['productCategory']; 
		});
		this.subRouterQueryParams = this.route.queryParams.subscribe(
			(params) => {
				this.querySubCategory = params['category'];
			}
		);
		this.subDeviceType = this.productService.deviceType$.subscribe(
			(data: string) => {
				this.deviceType = data;
			}
		)
		this.subparentUrl = this.productService.productParentUrl$.subscribe(
			(data: string) => {
				this.parentUrl = data;
			}
		)
		this.subProductViewType = this.productService.productViewType$.subscribe(
			(data: string) => {
				this.productViewType = data;
			}
		)
		this.subRouterEvents = this.router.events.pipe(
				filter(event => event instanceof NavigationEnd)
		).subscribe((route: ActivatedRoute) => {
			if (this.querySubCategory == undefined)
				this.querySubCategory = '';
			else
				this.querySubCategory = this.querySubCategory.toLowerCase();
			this.addBreadcrumb();
			window.scrollTo(0, 0)
		});
		
	}
	
	ngOnInit() {
		this.addBreadcrumb();
	}
	
	addBreadcrumb() {
		//this.detailUrl = this.parentUrl + '/products/' + this.category + '/' + this.querySubCategory + '/detail';
		this.detailUrl = this.parentUrl + '/products/detail';
		this.productCategories = this.productService.getProductCategories();
		this.products = this.productService.getProducts();
		/*this.breadcrumb = [
		{label: 'products' , url: '/' + this.parentUrl + '/products/', params: []},
		{label: this.category.toLowerCase() , url: '/' + this.parentUrl + '/products/' + this.category, params: []},
		{label: this.querySubCategory.toLowerCase() , url: '', params: []},
		];
		console.log('grid breadcrumbs: ' + this.breadcrumb);
		this.breadcrumbsService.store(this.breadcrumb);*/
	}
	
	handleSubCategoryFilter(subCategory: string) {
		this.router.navigate([this.parentUrl + '/products/' + this.category + '/' + this.productViewType],  { queryParams: { category: subCategory }, queryParamsHandling: 'merge'});
	}
	
	onClicked() {	
		let newProductViewType = '';
		if (this.productViewType == 'product-grid')
			newProductViewType = 'product-list';
		else
			newProductViewType = 'product-grid';
			
		this.productService.changeProductViewType(newProductViewType);	
		this.router.navigate(['./' + this.parentUrl + '/products/' + this.category + '/' + this.productViewType + '/' + this.subCategory]);
	}
	
	removeBreadcrumb() {
		this.breadcrumb = [] = [];
		this.breadcrumbsService.store(this.breadcrumb);
		console.log('ngOnDestroy1 breadcrumb');
	}
	   
	   
	ngOnDestroy() {
		this.subDeviceType.unsubscribe();
		this.subparentUrl.unsubscribe();
		this.subProductViewType.unsubscribe();
		this.subRouterEvents.unsubscribe();
		this.subRouterParams.unsubscribe();
		this.subRouterQueryParams.unsubscribe();
		this.removeBreadcrumb();
	}
}