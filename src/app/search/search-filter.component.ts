import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from '../product/product';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit, OnDestroy {
	@Input() products: Product[];
	@Input() props: any[];
	queryCategory: string; 
	querySubCategory: string; 
	queryColor: string; 
	subRouterParams : Subscription;
	subRouterQueryParams : Subscription;
	
  constructor(
		private router: Router,
		private route: ActivatedRoute
	) { 
		this.subRouterParams = this.route.params.subscribe(
			(params: string) => {
				this.query = params['query'];
			}
		);
		this.subRouterQueryParams = this.route.queryParams.subscribe(
			(params: string) => {
				this.queryCategory = params['category'];
				this.querySubCategory = params['subCategory'];
				this.queryColor = params['color'];
			}
		);
	}

  ngOnInit() {
  }
	
	handleColorFilter(color: string) {
		this.router.navigate([this.props.parentUrl + '/search/' + this.query], { queryParams: { color: color }, queryParamsHandling: 'merge'  });
	}
	
	handleCategoryFilter(category: string) {
		this.router.navigate([this.props.parentUrl + '/search/' + this.query] , { queryParams: { category: category,  } queryParamsHandling: 'merge' });
	}
	
	handleSubCategoryFilter(subCategory: string) {
		this.router.navigate([this.props.parentUrl + '/search/' + this.query],  { queryParams: { subCategory: subCategory }, queryParamsHandling: 'merge'});
	}
	
	ngOnDestroy() {
		this.subRouterParams.unsubscribe();
		this.subRouterQueryParams.unsubscribe();
	}
}
