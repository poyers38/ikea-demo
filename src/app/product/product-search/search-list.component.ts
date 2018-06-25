import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
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
  category: string;
  subCategory: string;
  
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
  }
  
  keyPresss() {
	this.inputSearch3 = this.inputSearch.nativeElement.value;
	console.log(this.inputSearch3);
  }
  
  resetSearchText() {
	this.inputSearch.nativeElement.value = "";
  }
  
  ngOnDestroy() {
	this.subRouterParams.unsubscribe();
  }
  
}
