import { Component, OnDestroy } from '@angular/core';
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
    subCategory: string;
	private subDeviceType: Subscription;
	private subProductParentUrl: Subscription;
	private subProductViewType: Subscription;
	private subRouterEvents: Subscription;
	private subRouterParams: Subscription;
	private breadcrumb: any[];
	private detailUrl: string;
	productViewType: string;
	productViewType2: string;
	myProps: Props[];
	productParentUrl: string;
	deviceType: string;
	
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private productService: ProductService,
		private breadcrumbsService: BreadcrumbsService
	)
	{ 
		this.subDeviceType = this.productService.deviceType$.subscribe(
			(data: string) => {
				this.deviceType = data;
			}
		)
		this.subProductParentUrl = this.productService.productParentUrl$.subscribe(
			(data: string) => {
				this.productParentUrl = data;
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
			this.addBreadcrumb();
			window.scrollTo(0, 0)
        });
	}
	
	addBreadcrumb() {
		this.subRouterParams = this.route.params.subscribe(params => {
			this.category = params['productCategory']; 
			this.subCategory = params['productSubCategory']; 
		});
		this.detailUrl = '../../' + this.category + '/' + this.subCategory + '/detail';
		this.productCategories = this.productService.getProductCategories();
		this.products = this.productService.getProducts();
		//this.myProps.push({ products: this.products, detailUrl: this.detailUrl});
		this.breadcrumb = [
		{label: 'shop' , url: '/' + this.productParentUrl + '/', params: []},
		{label: this.category.toLowerCase() , url: '/' + this.productParentUrl + '/' + this.category, params: []},
		{label: this.subCategory.toLowerCase() , url: '', params: []},
		];
		console.log('grid breadcrumbs: ' + this.breadcrumb);
		this.breadcrumbsService.store(this.breadcrumb);
	}
	
	onClicked() {	
		let newProductViewType = '';
		if (this.productViewType == 'product-grid')
			newProductViewType = 'product-list';
		else
			newProductViewType = 'product-grid';
			
		this.productService.changeProductViewType(newProductViewType);	
		this.router.navigate(['./' + this.productParentUrl + '/' + this.category + '/' + this.productViewType + '/' + this.subCategory]);
	}
	
	removeBreadcrumb() {
		this.breadcrumb = [] = [];
		this.breadcrumbsService.store(this.breadcrumb);
		console.log('ngOnDestroy1 breadcrumb');
	}
	   
	   
	ngOnDestroy() {
		this.subDeviceType.unsubscribe();
		this.subProductParentUrl.unsubscribe();
		this.subProductViewType.unsubscribe();
		this.subRouterEvents.unsubscribe();
		this.subRouterParams.unsubscribe();
		this.removeBreadcrumb();
	}
}