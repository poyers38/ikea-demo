import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Product } from '../../product/product';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-search-filter-sub-category-modal',
  templateUrl: './search-filter-sub-category-modal.component.html',
  styleUrls: ['./search-filter-sub-category-modal.component.scss']
})
export class SearchFilterSubCategoryModalComponent implements OnInit {

  products: Product[];
  parentUrl: string;
	title: string; 
	query: string; 
	queryCategory: string; 
	querySubCategory: string; 
	queryColor: string; 
  selectedColor: string; 
	
	constructor(
		public bsModalRef: BsModalRef,
		private router: Router,
		private route: ActivatedRoute,
		private productService: ProductService
	) {
		
		console.log(this.query);
		console.log(this.queryColor);
	}
 
  ngOnInit() {
		console.log('modals!');
    console.log(this.products);
  }
	
	handleSelectedFilter(subCategory: string) 
	{
		this.router.navigate([this.parentUrl + '/search/' + this.query],  { queryParams: { subCategory: subCategory }, queryParamsHandling: 'merge'});
		this.productService.changeSearchBar(false);
		this.productService.changeSearchBarMobile(false);
		this.bsModalRef.hide()
	}
	
}
