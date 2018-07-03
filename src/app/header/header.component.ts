import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSearchBarOpen: boolean;
  
  constructor(
	private productService: ProductService
  ) { }

  ngOnInit() {
	this.subSearchBarOpen = this.productService.isSearchBarOpen$.subscribe(
		(data: boolean) => {
			this.isSearchBarOpen = data;
		}
	)
  }
	
  clicked() : string {
	return 'show';
  }
  
  ngOnDestroy() {
	this.subSearchBarOpen.unsubscribe();
  }
}
