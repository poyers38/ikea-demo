import { Component, OnInit, ViewChild ,HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductService } from '../product/product.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-search-main',
  templateUrl: './search-main.component.html'
})
export class SearchMainComponent implements OnInit {
  products: Product[];
  @ViewChild('inputSearch') inputSearch;
  inputSearch3: string;
  
  private subPrevUrl: Subscription;
  private subProductParentUrl: Subscription;
  private subPrevProductSearch: Subscription;
  private subSearchBarMobileStatus: Subscription;
  private subSearchKeyword: Subscription;
  category: string;
  subCategory: string;
  prevUrl: string;
  productParentUrl: string;
  prevSearch: string;
  searchKeyword: string;
  clickFromInside: boolean;
  clickFromInsideCounter: number;
  isSearchBarMobileOpen: boolean;
  
  constructor(
	private productService: ProductService,
	private router: Router,
	private route: ActivatedRoute
  ) { 
	
  }

  ngOnInit() {
	this.clickFromInside = false;
	this.clickFromInsideCounter = 0;
	this.products = this.productService.getProducts();
	console.log(this.products);
	
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
	this.subSearchBarMobileStatus = this.productService.isSearchBarMobileOpen$.subscribe(
		(data: boolean) => {
			this.isSearchBarMobileOpen = data;
		}
	)
	this.subSearchKeyword = this.productService.searchKeyword$.subscribe(
			(data: boolean) => {
				this.searchKeyword = data;
			}
		)
  }
  
  goToPrevUrl() {
	if (this.prevUrl == '') {
		this.router.navigate([this.productParentUrl]);
	}
	this.router.navigate([this.prevUrl]);
  }
 
  ngOnDestroy() {
	this.subPrevUrl.unsubscribe();
	this.subProductParentUrl.unsubscribe();
	this.subPrevProductSearch.unsubscribe();
	this.subSearchBarMobileStatus.unsubscribe();
	this.subSearchKeyword.unsubscribe();
  }
  
   private wasInside = false;
  
  @HostListener('click')
  clickInside() {
    this.clickFromInside = true;
  }
  
  @HostListener('document:click')
  clickout() {
	if (!this.clickFromInside) {
	  console.log('clicked from outside!');
	  this.clickFromInsideCounter++;
	  if (this.isSearchBarMobileOpen && this.clickFromInsideCounter > 1)
		this.productService.changeSearchBarMobile(false);
    }
    this.clickFromInside = false;
  }
}
