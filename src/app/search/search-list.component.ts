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
	@Input() props: any[];
	subRouterParams: Subscription;
	queryCategory: string;
	querySubCategory: string;
	queryColor: string; 
	
	constructor(
		private router: Router,
		private productService: ProductService,
		private route: ActivatedRoute
	) {
		this.subRouterParams = this.route.queryParams.subscribe(
			(params: string) => {
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
	}
	
	ngOnDestroy() {
		this.subRouterParams.unsubscribe();
	}
	
}

