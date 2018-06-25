import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';
		
@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html'
})

export class ProductGridItemComponent implements OnInit {
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
		console.log(this.product);
		this.router.navigate(['shop/' + prodDetailUrl + '/' + this.product['id']]);
	}
}
