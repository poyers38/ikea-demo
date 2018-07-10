import { Component, OnInit, Input, HostListener } from '@angular/core';

import { ProductService } from '../product.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-product-sidebar',
  templateUrl: './product-sidebar.component.html'
})

export class ProductSidebarComponent implements OnInit {
	@Input() categoryRouteParam: string;
	products: Product[];
	productViewType: string;
	
  constructor(
	private productService: ProductService,
  ) { 
  }

  ngOnInit(
  ) {
		this.productService.productViewType$.subscribe(data => { this.productViewType = data; });
		this.products = this.productService.getProducts();
  }
	
}


