import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {
  isSearchBarMobileOpen: boolean;
  subSearchBarMobileOpen: Subscription;
  constructor(
	private productService: ProductService
  ) { }

  ngOnInit(
	
  ) {
	this.subSearchBarMobileOpen = this.productService.isSearchBarMobileOpen$.subscribe(
		(data: boolean) => {
			this.isSearchBarMobileOpen = data;
		}
	)
  }
  
  ngOnDestroy() {
	this.subSearchBarMobileOpen.unsubscribe();
  }
}
