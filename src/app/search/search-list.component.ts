import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html'
})

export class SearchListComponent implements OnInit, OnDestroy {
	@Input() products: Product[];
	@Input() parentUrl: string;
	private subRouterParams: Subscription;
	private subDeviceType: Subscription;
	private subRouterQueryParams: Subscription;
	deviceType: string;
	query: string;
	queryCategory: string;
	querySubCategory: string;
	queryColor: string; 
	detailUrl: string; 
	
	constructor(
		private router: Router,
		private productService: ProductService,
		private route: ActivatedRoute
	) {
		this.subDeviceType = this.productService.deviceType$.subscribe(
			(data: string) => {
				this.deviceType = data;
			}
		)
		this.subRouterParams = this.route.params.subscribe(
			(params) => {
				this.query = params['query'];
			}
		);
		this.subRouterQueryParams = this.route.queryParams.subscribe(
			(params) => {
				this.queryCategory = params['category'];
				this.querySubCategory = params['subCategory'];
				this.queryColor = params['color'];
			}
		);
		if (this.queryCategory == undefined) 
			this.queryCategory = '';
		if (this.querySubCategory == undefined) 
			this.querySubCategory = '';
		if (this.queryColor == undefined) 
			this.queryColor = '';
	}

	ngOnInit() {
		console.log('products');
		console.log(this.products);
		this.detailUrl = this.parentUrl + '/search/detail/';
	}
	
	ngOnDestroy() {
		this.subRouterParams.unsubscribe();
		this.subDeviceType.unsubscribe();
		this.subRouterQueryParams.unsubscribe();
	}
	
}

