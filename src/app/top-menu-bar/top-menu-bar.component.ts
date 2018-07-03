import { Component, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-top-menu-bar',
  templateUrl: './top-menu-bar.component.html',
  styleUrls: ['./top-menu-bar.component.scss']
})
export class TopMenuBarComponent implements  OnDestroy 
{
  isSearchBarMobileOpen: boolean;
  isSearchBarOpen: boolean;
  deviceType: string;
  subDeviceType: Subscription;
  subSearchBarOpen: Subscription;
  subSearchBarMobileOpen: Subscription;
	subParentUrl: Subscription;
  currentUrl: string;
	parentUrl: string;
  private inputSearch: ElementRef;
	
  @ViewChild('inputSearch') set content(content: ElementRef) {
	if (this.isSearchBarOpen) {
		this.inputSearch = content;
		this.inputSearch.nativeElement.focus();
	}
  }
  
  constructor(
		private productService: ProductService,
		private router: Router,
		private route: ActivatedRoute
  ) { 
		this.subDeviceType = this.productService.deviceType$.subscribe(
			(data: string) => {
				this.deviceType = data;
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
		this.subParentUrl = this.productService.productParentUrl$.subscribe(
			(data: boolean) => {
				this.parentUrl = data;
			}
		)
  }
  
  onKeyPress() {
		this.productService.changeSearchKeyword(this.inputSearch.nativeElement.value);
  }
  
	handleSearch() {
		this.router.navigate(['/' + this.parentUrl + '/search/' + this.inputSearch.nativeElement.value]);
		this.productService.changeSearchBar(false);
	}
	
  toggleSearchBar(): void {
    if (this.deviceType != 'mobile') {
		this.isSearchBarOpen = !this.isSearchBarOpen;
		this.productService.changeSearchBar(this.isSearchBarOpen);
	}
	else {
		console.log('this.currentUrl ' + this.router.url);
		this.productService.changePrevUrl(decodeURIComponent(this.router.url));
		this.productService.changeSearchBarMobile(true);
		
		//this.router.navigate(['m.shop/search']);
	}
  }
  
  onSearch() {
	//this.productService.changeSearchKeyword(this.inputSearch.nativeElement.value);
	
  }
  
  ngOnDestroy() {
	this.subDeviceType.unsubscribe();
	this.subSearchBarMobileOpen.unsubscribe();
	this.subSearchBarOpen.unsubscribe();
	this.subParentUrl.unsubscribe();
  }
}
