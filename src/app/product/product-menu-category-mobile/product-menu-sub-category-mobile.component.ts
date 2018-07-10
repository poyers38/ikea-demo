import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BreadcrumbsService } from 'ng6-breadcrumbs';

import { ProductCategory } from './product-category.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-menu-sub-category-mobile',
  templateUrl: './product-menu-sub-category-mobile.component.html'
})

export class ProductMenuSubCategoryMobileComponent implements OnInit, OnDestroy {
	products: Product[];
  productCategories: ProductCategory[];
	category: string;
	querySubCategory: string;
	private subProductParentUrl: Subscription;
	private subProductViewType: Subscription;
	private subRouterEvents: Subscription;
	private subRouterParams: Subscription;
	private subRouterQueryParams: Subscription;
	
  productParentUrl: string;
  private subProductParentUrl: Subscription;
	
  constructor(
		private productService: ProductService,
		private router: Router,
		private route:  ActivatedRoute,
		private breadcrumbsService: BreadcrumbsService
  ) 
	{ 
		this.subRouterEvents = this.router.events.pipe(
			filter(event => event instanceof NavigationEnd)
		).subscribe((route: ActivatedRoute) => {
			this.addBreadcrumb();
		});
		this.subRouterParams = this.route.params.subscribe(params => {
			this.category = params['productCategory']; 
		});
		this.subRouterQueryParams = this.route.queryParams.subscribe(
			(params) => {
				this.querySubCategory = params['category'];
			}
		);
		this.subparentUrl = this.productService.productParentUrl$.subscribe(
			(data: string) => {
				this.parentUrl = data;
			});
		this.subProductViewType = this.productService.productViewType$.subscribe(
			(data: string) => {
				this.productViewType = data;
			});		
  }

  ngOnInit() {
		this.productCategories = this.productService.getProductCategories();
  }
  
  onClicked(prodCat: ProductCategory[]) {
		this.router.navigate(['./' + this.parentUrl + '/products/' + this.category + '/' + this.productViewType],  { queryParams: { category: prodCat['name'] }, queryParamsHandling: 'merge'});
	}
	
	addBreadcrumb() {
		this.breadcrumb = [
			{label: 'Department' , url: '/' + this.parentUrl + '/products/', params: []},
			{label: this.category.toLowerCase() , url: '', params: []},
		];
		console.log('cat sel: ' + this.breadcrumb);
		this.breadcrumbsService.store(this.breadcrumb);
  }
	
	ngOnDestroy() {
		this.subparentUrl.unsubscribe();
		this.subProductViewType.unsubscribe();
		this.subRouterParams.unsubscribe();
		this.subRouterQueryParams.unsubscribe();
		this.subRouterEvents.unsubscribe();
	}
}
