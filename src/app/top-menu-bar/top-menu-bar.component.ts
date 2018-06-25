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
  isSearchBarOpen: boolean;
  deviceType: string;
  subDeviceType: Subscription;
  subSearchBarMobileOpen: Subscription;
  constructor(
	private productService: ProductService,
	private router: Router
  ) { 
		this.isSearchBarOpen = false;
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
    if (this.deviceType != 'mobile')
		this.isSearchBarOpen = !this.isSearchBarOpen;
	else 
		this.router.navigate(['m.shop/search']);
  }
  
  ngOnDestroy() {
	this.subDeviceType.unsubscribe();
	this.subSearchBarMobileOpen.unsubscribe();
  }
}
