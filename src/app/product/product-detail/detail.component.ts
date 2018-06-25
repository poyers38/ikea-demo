import { Component, OnInit, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
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
	products: Product[];
	product: any[];
	productImages: ProductImage[];
	private breadcrumb: any[];
	private category: string;
	private subCategory: string;
	private productCode: number;
	productViewType: string;
	deviceType: string;
	private productParentUrl: string;
	
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
		
		this.subRouterEvents = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((route: ActivatedRoute) => {
            this.addBreadcrumb();
				window.scrollTo(0, 0)
        });

	}

	ngOnInit() {
		this.product = this.productService.getProduct(this.productCode);
		console.log(this.productCode);
		this.productImages = this.productService.getProductImage(this.productCode);
		console.log(this.productImages);
	}
	
	changePhoto(imgPath: string) {
		console.log(imgPath);
		this.imageCarousel.nativeElement.src = imgPath;
	}
	addBreadcrumb() {
		this.breadcrumb = [
			{label: 'shop' , url: '/' + this.productParentUrl + '/', params: []},
			{label: this.category.toLowerCase() , url: '/' + this.productParentUrl + '/' + this.category, params: []},
			{label: this.subCategory.toLowerCase(), url: '/' + this.productParentUrl + '/' + this.category + '/' + this.productViewType + '/' + this.subCategory, params: []},
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
