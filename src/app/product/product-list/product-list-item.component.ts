import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';
		
@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html'
})

export class ProductListItemComponent implements OnInit {
	@Input() props: { product: Product[]; detailUrl: string; };
	product: Product[];
	productDetailUrl: string;
	
	constructor(
		private router: Router,
		private productService: ProductService,
	)
	{}

	ngOnInit() {
		this.product = this.props.product;
		this.productDetailUrl = this.props.detailUrl;
	}

	onClicked(prodDetailUrl: string) {
		console.log('product');
		console.log(prodDetailUrl);
		this.router.navigate([prodDetailUrl + '/' + this.product['id']]);
	}
}
