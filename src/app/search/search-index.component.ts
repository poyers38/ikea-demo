import { Component, OnInit, OnDestroy, ViewChild ,HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductService } from '../product/product.service';
import { Product } from '../product/product';


@Component({
  selector: 'app-search-index',
  templateUrl: './search-index.component.html',
  styleUrls: ['./search-index.component.scss']
})
export class SearchIndexComponent implements OnInit, OnDestroy {
  products: Product[];
  inputSearch3: string;
  private subRouterParams: Subscription;
	private subRouterQueryParams: Subscription;
  private subPrevUrl: Subscription;
  private subProductParentUrl: Subscription;
  private subPrevProductSearch: Subscription;
  private subSearchBarMobileStatus: Subscription;
	private subDeviceType: Subscription;
  category: string;
  subCategory: string;
  prevUrl: string;
  parentUrl: string;
  prevSearch: string;
  clickFromInside: boolean;
  clickFromInsideCounter: number;
  isSearchBarMobileOpen: boolean;
	deviceType: string;
  query: string;
	queryCategory: string; 
	querySubCategory: string; 
	queryColor: string; 
	
  constructor(
	private productService: ProductService,
	private router: Router,
	private route: ActivatedRoute
  ) {
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
		this.subPrevUrl = this.productService.prevUrl$.subscribe(
			(data: string) => {
				this.prevUrl = data;
			}
		)
		this.subProductParentUrl = this.productService.productParentUrl$.subscribe(
			(data: string) => {
				this.parentUrl = data;
			}
		)
		this.subPrevProductSearch = this.productService.prevProdSearch$.subscribe(
			(data: string) => {
				this.prevSearch = data;
			}
		)
		this.subSearchBarMobileStatus = this.productService.isSearchBarMobileOpen$.subscribe(
			(data: boolean) => {
				this.isSearchBarMobileOpen = data;
			}
		)
		this.subDeviceType = this.productService.deviceType$.subscribe(
			(data: string) => {
				this.deviceType = data;
			}
		)
		
		if (this.queryCategory == undefined) 
			this.queryCategory = '';
		if (this.querySubCategory == undefined) 
			this.querySubCategory = '';
		if (this.queryColor == undefined) 
			this.queryColor = '';
  }

  ngOnInit() {
		this.clickFromInside = false;
		this.clickFromInsideCounter = 0;
		this.products = this.productService.getProducts();
  }
  
  goToPrevUrl() {
		if (this.prevUrl == '') {
			this.router.navigate([this.parentUrl]);
		}
		this.router.navigate([this.prevUrl]);
  }
 
  
  
  ngOnDestroy() {
		this.subPrevUrl.unsubscribe();
		this.subProductParentUrl.unsubscribe();
		this.subPrevProductSearch.unsubscribe();
		this.subRouterParams.unsubscribe();
		this.subRouterQueryParams.unsubscribe();
  }
}
