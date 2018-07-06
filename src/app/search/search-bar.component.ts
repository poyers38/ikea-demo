import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  subSearchBarOpen: Subscription;
	subSearchBarMobileOpen: Subscription;
	subParentUrl: Subscription;
	parentUrl: string;
	isSearchBarOpen: boolean;
	isSearchBarMobileOpen: boolean;
	private inputSearch: ElementRef;
  @ViewChild('inputSearch') set content(content: ElementRef) {
		if (this.isSearchBarOpen || this.isSearchBarMobileOpen) {
			this.inputSearch = content;
			this.inputSearch.nativeElement.focus();
		}
  }
	
  constructor(
		private productService: ProductService,
		private router: Router,
		private route: ActivatedRoute
	) {
		this.subParentUrl = this.productService.productParentUrl$.subscribe(
			(data: string) => {
				this.parentUrl = data;
			}
		)
		this.subSearchBarOpen = this.productService.isSearchBarOpen$.subscribe(
			(data: boolean) => {
				this.isSearchBarOpen = data;
			}
		)
		this.subSearchBarMobileOpen = this.productService.isSearchBarMobileOpen$.subscribe(
			(data: boolean) => {
				this.isSearchBarMobileOpen = data;
			}
		)
	}

  ngOnInit() {
		this.inputSearch.nativeElement.focus();
  }
	
	handleSearch() {
		this.router.navigate(['/' + this.parentUrl + '/search/' + this.inputSearch.nativeElement.value]);
		this.productService.changeSearchBar(false);
		this.productService.changeSearchBarMobile(false);
	}
	
	closeSearchBar() {
		this.productService.changeSearchBar(false);
		this.productService.changeSearchBarMobile(false);
	}
	onKeyPress() {}
	
	ngOnDestroy() {
		this.subParentUrl.unsubscribe();
		this.subSearchBarMobileOpen.unsubscribe();
  }
}
