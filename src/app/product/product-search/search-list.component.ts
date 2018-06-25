import { Component, OnInit, ViewChild, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit, OnDestroy {
  products: Product[];
  @ViewChild('inputSearch') inputSearch;
  inputSearch3: string;
  private subRouterParams: Subscription;
  private subPrevUrl: Subscription;
  private subProductParentUrl: Subscription;
  private subPrevProductSearch: Subscription;
  category: string;
  subCategory: string;
  prevUrl: string;
  productParentUrl: string;
  prevSearch: string;
  
  constructor(
	private productService: ProductService,
	private router: Router,
	private route: ActivatedRoute,
  ) {
	
  }

  ngOnInit() {
	console.log(this.router);
	this.products = this.productService.getProducts();
	console.log(this.products);
	this.subRouterParams = this.route.params.subscribe(params => {
		this.category = params['productCategory']; 
		this.subCategory = params['productSubCategory']; 
	});
	this.subPrevUrl = this.productService.prevUrl$.subscribe(
		(data: string) => {
			this.prevUrl = data;
		}
	)
	this.subProductParentUrl = this.productService.productParentUrl$.subscribe(
			(data: string) => {
				this.productParentUrl = data;
			}
		)
	this.subPrevProductSearch = this.productService.prevProdSearch$.subscribe(
		(data: string) => {
			this.prevSearch = data;
		}
	)
	this.inputSearch.nativeElement.value = this.prevSearch;
	this.inputSearch.nativeElement.focus();
	this.inputSearch3 = this.inputSearch.nativeElement.value;
  }
  
  goToPrevUrl() {
	if (this.prevUrl == '') {
		this.router.navigate([this.productParentUrl]);
	}
	this.router.navigate([this.prevUrl]);
  }
  
  keyPresss() {
	this.inputSearch3 = this.inputSearch.nativeElement.value;
	console.log(this.inputSearch3);
  }
  
  resetSearchText() {
	this.inputSearch.nativeElement.value = "";
	this.inputSearch3 = "";
	this.inputSearch.nativeElement.focus();
  }
  
  ngOnDestroy() {
	this.subRouterParams.unsubscribe();
	this.subPrevUrl.unsubscribe();
	this.subProductParentUrl.unsubscribe();
	this.subPrevProductSearch.unsubscribe();
	this.productService.changePrevProdSearch(this.inputSearch.nativeElement.value);
  }
  
}
