import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { BreadcrumbsService } from 'ng6-breadcrumbs';
import { Product } from './product';
import { ProductImage } from './product-image';
import { ProductService } from './product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
	products: Product[];
	product: Product[];
	productImages: ProductImage[];
	private breadcrumb: [];
	private category: string;
	private subCategory: string;
	private productCode: string;
	productViewType: string;
	private deviceType: string;
	private productParentUrl: string;
	
	@ViewChild('img1') img;
	private subRouterEvents: Subscription;
	private subRouterParams: Subscription;
	private subProductParentUrl: Subscription;
	
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private breadcrumbsService: BreadcrumbsService,
		private productService: ProductService
	) 
	{ 
		this.subRouterParams = this.route.params.subscribe(params => {
			this.category = params['productCategory']; 
			this.subCategory = params['productSubCategory']; 
			this.productCode = params['productCode']; 
		});
		
		this.subProductParentUrl = this.productService.productParentUrl$.subscribe(
			(data: string) => {
				this.productParentUrl = data;
			}
		)
		this.subDeviceType = this.productService.deviceType$.subscribe(
			(data: string) => {
				this.deviceType = data;
			}
		)	
		this.subProductViewType = this.productService.productViewType$.subscribe(
			(data: string) => {
				this.productViewType = data;
			}
		)	
		this.subRouterEvents = router.events.subscribe( (event: Event) => {
			if (event instanceof NavigationStart) {
			}
			if (event instanceof NavigationEnd) {
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

	ngOnInit() {
		this.product = this.productService.getProduct(this.productCode);
		this.productImages = this.productService.getProductImages();
		console.log(this.productImages);
	}

	addBreadcrumb() {
		this.breadcrumb = [
			{label: 'shop' , url: '/' + this.productParentUrl + '/', params: []},
			{label: this.category.toLowerCase() , url: '/' + this.productParentUrl + '/' + this.category, params: []},
			{label: this.subCategory.toLowerCase(), url: '/' + this.productParentUrl + '/' + this.category + '/' + this.productViewType + '/' + this.subCategory, params: []},
			{label: this.productCode.toLowerCase() , url: '', params: []},
		];
		this.breadcrumbsService.store(this.breadcrumb);
	}
    
	changePhoto() {
		console.log(this.img);
		this.img.nativeElement.src = '../../assets/images/strandmon-wing-chair-yellow__0325450_PE517970_S4.JPG'
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
