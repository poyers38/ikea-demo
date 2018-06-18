import { Component, OnInit, Input, HostListener } from '@angular/core';

import { ProductService } from './product.service';

@Component({
  selector: 'app-product-sidebar',
  templateUrl: './product-sidebar.component.html'
})

export class ProductSidebarComponent implements OnInit {
	@Input() categoryRouteParam: string;

	productViewType: string;
	
  constructor(
	private productService: ProductService,
  ) { 
  }

  ngOnInit(
  ) {
	this.productService.productViewType$.subscribe(data => { this.productViewType = data; });
  }
	
}


