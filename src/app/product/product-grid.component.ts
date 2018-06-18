import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError, Event } from '@angular/router';
import { BreadcrumbsService } from 'ng6-breadcrumbs';
import { Subscription } from 'rxjs/Subscription';

import { Product } from './product';
import { ProductCategory } from './product-category/product-category.class';
import { PRODUCTS } from './mock-product';
import { ProductService } from './product.service';

class Props {
	products: Product[];
	detailUrl: string;
}

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html'
})

export class ProductGridComponent implements OnInit, OnDestroy {
	products: Product[];
	productCategories: ProductCategory[];
	category: string;
    subCategory: string;
	private subDeviceType: Subscription;
	private subProductParentUrl: Subscription;
	private subProductViewType: Subscription;
	private subRouter: Subscription;
	private subRouterParams: Subscription;
	private breadcrumb: [] = [];
	private detailUrl: string;
	private productViewType: string;
	private productViewType2: string;
	myProps: Props[] = [];
	private productParentUrl: string;
	private deviceType: string;
	
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
		this.subRouter = router.events.subscribe( (event: Event) => {
			if (event instanceof NavigationStart) {
			}
			if (event instanceof NavigationEnd) {
				console.log('Grid NavigationEnd');
				this.addBreadcrumb();
				window.scrollTo(0, 0)
			}
			if (event instanceof NavigationError) {
				// Hide loading indicator
				// Present error to user
				console.log(event.error);
			}
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
		this.myProps = { products: this.products, detailUrl: this.detailUrl };
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
		this.breadcrumb = [];
		this.breadcrumbsService.store(this.breadcrumb);
		console.log('ngOnDestroy breadcrumb');
	}
	   
	   
	ngOnDestroy() {
		this.subDeviceType.unsubscribe();
		this.subProductParentUrl.unsubscribe();
		this.subProductViewType.unsubscribe();
		this.subRouter.unsubscribe();
		this.subRouterParams.unsubscribe();
		this.removeBreadcrumb();
	}
}