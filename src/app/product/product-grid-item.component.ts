import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';
		
@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html'
})

export class ProductGridItemComponent implements OnInit {
	@Input() props: { product: Product[]; detailUrl: string; };
	private product: Product[];
	private productDetailUrl: string;
	private productViewType: string;
	
	constructor(
		private router: Router,
		private productService: ProductService,
	)
	{}

	ngOnInit() {
		this.product = this.props.product;
		this.productDetailUrl = this.props.detailUrl;
		this.productViewType = this.props.productViewType;
		
	}
	
	addBreadcrumb() {
	
	}

	onClicked(prodDetailUrl: string) {
		this.router.navigate(['shop sri/' + prodDetailUrl + '/' + this.product.id]);
	}
}
