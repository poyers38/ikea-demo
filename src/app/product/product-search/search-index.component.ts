import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductService } from '../product.service';
 
@Component({
  selector: 'app-search-index',
  templateUrl: './search-index.component.html',
  styleUrls: ['./search-index.component.scss']
})
export class SearchIndexComponent implements 
	OnInit, 
	OnDestroy
{

  constructor(
	private productService: ProductService
  ) { 
  }

  ngOnInit() {
	//this.productService.changeSearchBarMobile(true);
  }
  
  ngOnDestroy() {
	console.log('bbbbbbbbbbbbb');
	this.productService.changeSearchBarMobile(false);
  }
}
