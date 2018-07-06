import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { SearchService } from './search.service';
import { SearchFilterColorModalComponent } from './search.modals/search-filter-color-modal.component';
import { SearchFilterCategoryModalComponent } from './search.modals/search-filter-category-modal.component';
import { SearchFilterSubCategoryModalComponent } from './search.modals/search-filter-sub-category-modal.component';
import { Product } from '../product/product';

@Component({
  selector: 'app-search-filter-mobile',
  templateUrl: './search-filter-mobile.component.html',
  styleUrls: ['./search-filter-mobile.component.scss']
})
export class SearchFilterMobileComponent implements OnInit, OnDestroy {
	@Input() products: Product[];
	@Input() parentUrl;
	query: string; 
	queryCategory: string; 
	querySubCategory: string; 
	queryColor: string; 
	showResetFilter: boolean;
	modalSelectedColor: string; 
	filterState: boolean;
	subRouterParams : Subscription;
	subRouterQueryParams : Subscription;
	subRouterEvents : Subscription;
	bsModalRef: BsModalRef;
	
  constructor(
		private router: Router,
		private route: ActivatedRoute,
		private modalService: BsModalService,
		private searchService: SearchService
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
		if (this.queryCategory == undefined) 
			this.queryCategory = '';
		if (this.querySubCategory == undefined) 
			this.querySubCategory = '';
		if (this.queryColor == undefined) 
			this.queryColor = '';
		
		this.searchService.isFilterOpenSource.subscribe(
			(filterState: boolean) => {
				this.filterState = filterState;
			}
		)
		
		this.subRouterEvents = this.router.events.pipe(
				filter(event => event instanceof NavigationEnd)
		).subscribe((route: ActivatedRoute) => {
				this.showResetFilterStatus();
		});
	}

  ngOnInit() {
		this.showResetFilter = false;
		this.showResetFilterStatus();
  }
	
	showResetFilterStatus() {
		console.log('INITTTTTTTTTTTTTTT!');
		this.showResetFilter = false;
		if (this.queryColor != undefined && this.queryColor != '')
			this.showResetFilter = true;
		if (this.queryCategory != undefined && this.queryCategory != '')
			this.showResetFilter = true;
		if (this.querySubCategory != undefined && this.querySubCategory != '')
			this.showResetFilter = true;	
			
	}
	
	handleColorFilter(color: string) {
		this.router.navigate([this.parentUrl + '/search/' + this.query], { queryParams: { color: color }, queryParamsHandling: 'merge'  });
	}
	
	handleCategoryFilter(category: string) {
		this.router.navigate([this.parentUrl + '/search/' + this.query] , { queryParams: { category: category }, queryParamsHandling: 'merge' });
	}
	
	handleSubCategoryFilter(subCategory: string) {
		this.router.navigate([this.parentUrl + '/search/' + this.query],  { queryParams: { subCategory: subCategory }, queryParamsHandling: 'merge'});
	}
	
	handleClearFilter(subCategory: string) {
		this.router.navigate([this.parentUrl + '/search/' + this.query]);
	}
	
	toggleFilter() {
		this.filterState = !this.filterState;
		this.searchService.changeFilterState(this.filterState)
	}
	 
	openColorSelectionModal() {
		 this.modalService.onHidden.subscribe((reason: string) => {
			console.log('selectedColor: ' + this.bsModalRef.content.selectedColor);
			this.modalSelectedColor = this.bsModalRef.content.selectedColor
		});
		const initialState = {
      products: this.products,
			parentUrl: this.parentUrl,
			query: this.query,
			queryColor: this.queryColor,
			queryCategory: this.queryCategory,
			querySubCategory: this.querySubCategory,
      title: 'Color selections'
    };
    this.bsModalRef = this.modalService.show(SearchFilterColorModalComponent, {initialState})
  }
	
	openCategorySelectionModal() {
		 this.modalService.onHidden.subscribe((reason: string) => {
			console.log('selectedColor: ' + this.bsModalRef.content.selectedColor);
			this.modalSelectedColor = this.bsModalRef.content.selectedColor
		});
		const initialState = {
      products: this.products,
			parentUrl: this.parentUrl,
			query: this.query,
			queryColor: this.queryColor,
			queryCategory: this.queryCategory,
			querySubCategory: this.querySubCategory,
      title: 'Department selections'
    };
    this.bsModalRef = this.modalService.show(SearchFilterCategoryModalComponent, {initialState});
  }
	
	openSubCategorySelectionModal() {
		 this.modalService.onHidden.subscribe((reason: string) => {
			console.log('selectedColor: ' + this.bsModalRef.content.selectedColor);
			this.modalSelectedColor = this.bsModalRef.content.selectedColor
		});
		const initialState = {
      products: this.products,
			parentUrl: this.parentUrl,
			query: this.query,
			queryColor: this.queryColor,
			queryCategory: this.queryCategory,
			querySubCategory: this.querySubCategory,
      title: 'Category selections'
    };
    this.bsModalRef = this.modalService.show(SearchFilterSubCategoryModalComponent, {initialState});
  }
	
	check(){
		this.modalSelectedColor = 'yellow';
		this.router.navigate([this.parentUrl + '/search/' + this.query], { queryParams: { color: this.modalSelectedColor }, queryParamsHandling: 'merge'  });
	}
	
	ngOnDestroy() {
		this.subRouterParams.unsubscribe();
		this.subRouterQueryParams.unsubscribe();
		this.subRouterEvents.unsubscribe();
	}
}
