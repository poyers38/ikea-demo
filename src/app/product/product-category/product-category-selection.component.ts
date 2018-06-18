import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { BreadcrumbsService } from 'ng6-breadcrumbs';
import { ProductCategory } from './product-category.class';
import { PRODUCTCATEGORY } from '../mock-product-category';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-category-selection',
  templateUrl: './product-category-selection.component.html',
  styleUrls: ['./product-category-selection.component.scss']
})
export class ProductCategorySelectionComponent implements OnInit {
	private sub: Subscription;
	private category: string;
	private products: Product[] = [];
	private productCategories: ProductCategory[] = [];
	private breadcrumb: [];
	private displayViewOption: boolean;
	private deviceType: string;
	private productParentUrl: string;
	
	private subRouterEvents: Subscription;
	private subRouterParams: Subscription;
	private subProductParentUrl: Subscription;
	private subDeviceType: Subscription;
	
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private productService: ProductService,
		private breadcrumbsService: BreadcrumbsService
	) {
		this.subRouterEvents = router.events.subscribe( (event: Event) => {
			if (event instanceof NavigationStart) {
			}
			if (event instanceof NavigationEnd) {
				this.addBreadcrumb();
			}
			if (event instanceof NavigationError) {
				// Hide loading indicator
				// Present error to user
				console.log(event.error);
			}
		});
		
		this.subDeviceType = this.productService.deviceType$.subscribe(
			(data: string) => {
				this.deviceType = data;
			}
		)
		this.subProductParentUrl = this.productService.productParentUrl$.subscribe(
			(data: string) => {
				this.productParentUrl = data;
				this.addBreadcrumb();
			}
		)
	}

  ngOnInit() : void {
	this.productCategories = this.productService.getProductCategories();
	
  }
  
  addBreadcrumb() {
	this.subRouterParams = this.route.params.subscribe(params => {
		this.category = params['productCategory']; 
	});
	
	this.products = this.productService.getProducts();
	this.breadcrumb = [
		{label: 'shop' , url: '/' + this.productParentUrl + '/', params: []},
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
		this.removeBreadcrumb();
	}
}
