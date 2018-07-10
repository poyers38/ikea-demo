import { Component, OnInit, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError, Params, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BreadcrumbsService } from 'ng6-breadcrumbs';

import { Product } from '../product';
import { ProductImage } from '../product-image';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
	products: Product;
	product: any[];
	productImages: ProductImage[];
	private breadcrumb: any[];
	private category: string;
	private subCategory: string;
	private productCode: number;
	productViewType: string;
	deviceType: string;
	private productParentUrl: string;
	params: Params;
	params2: RouterLink;
	@ViewChild('img1') img;
	@ViewChild('imageCarousel') imageCarousel;
	private subRouterEvents: Subscription;
	private subRouterParams: Subscription;
	private subProductParentUrl: Subscription;
	private subDeviceType: Subscription;
	private subProductViewType: Subscription;
	
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private breadcrumbsService: BreadcrumbsService,
		private productService: ProductService,
		private renderer: Renderer2
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
		);
		this.subDeviceType = this.productService.deviceType$.subscribe(
			(data: string) => {
				this.deviceType = data;
			}
		);
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

	ngOnInit() {
		
		this.productImages = this.productService.getProductImage(this.productCode);
		console.log('menuSubCategory');
		console.log(this.product);
		console.log(this.product[0]['menuSubCategory']);
		this.addBreadcrumb();
	}
	
	changePhoto(imgPath: string) {
		this.imageCarousel.nativeElement.src = imgPath;
	}
	
	addBreadcrumb() {
		this.product = this.productService.getProduct(this.productCode);
		this.params = {
			category: this.product[0]['menuSubCategory'];
		}
		console.log('this.params');
		console.log(this.params);
		//this.params2 = ([this.parentUrl + '/products/' + this.category + '/' + this.productViewType],  { queryParams: { category: subCategory }, queryParamsHandling: 'merge'});
		//console.log(this.params2);
		this.breadcrumb = [
			{label: 'products' , url: '/' + this.productParentUrl + '/products/', params: []},
			{label: this.product[0]['menuCategory'].toLowerCase() , url: '/' + this.productParentUrl + '/products/' + this.product[0]['menuCategory'], params: []},
			{label: this.product[0]['menuSubCategory'].toLowerCase(), url: '/' + this.productParentUrl + '/products/' + this.product[0]['menuCategory'] + '/' + this.productViewType, params: this.params},
			{label: this.productCode , url: '', params: []},
		];
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
