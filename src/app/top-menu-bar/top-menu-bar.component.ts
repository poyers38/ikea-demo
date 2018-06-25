import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-top-menu-bar',
  templateUrl: './top-menu-bar.component.html',
  styleUrls: ['./top-menu-bar.component.scss']
})
export class TopMenuBarComponent implements OnDestroy 
{
  isSearchBarMobileOpen: boolean;
  deviceType: string;
  subDeviceType: Subscription;
  subSearchBarMobileOpen: Subscription;
  constructor(
	private productService: ProductService,
	private router: Router
  ) { 
		this.subDeviceType = this.productService.deviceType$.subscribe(
			(data: string) => {
				this.deviceType = data;
			}
		)
		this.subSearchBarMobileOpen = this.productService.isSearchBarMobileOpen$.subscribe(
			(data: boolean) => {
				this.isSearchBarMobileOpen = data;
			}
		)
  }

  toggleSearchBar(): void {
	console.log('toggleSearchBar: ' + this.deviceType);
    if (this.deviceType == 'mobile') {
		console.log('toggleSearchBar 222');
		
		this.router.navigate(['m.shop/search']);
		
	}
	else {
		this.productService.changeSearchBarMobile(false);
	}
  }
  
  ngOnDestroy() {
	this.subDeviceType.unsubscribe();
	this.subSearchBarMobileOpen.unsubscribe();
  }
}
