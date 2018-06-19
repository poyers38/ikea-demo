import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html'
})

export class ProductListItemComponent implements OnInit, OnDestroy {
	@Input() props: { product: Product[]; detailUrl: string; productViewType: string; };
	product: Product[];
	productDetailUrl: string;
	private productViewType: string;
	productViewType2: string;
	private sub: any;
	deviceType: string;
	
	constructor(
		private router: Router,
		private productService: ProductService
	) {
		this.sub = this.productService.deviceType$.subscribe(
			(data: string) => {
				this.deviceType = data;
			}
		)
	}

	ngOnInit() {
		this.product = this.props.product;
		this.productDetailUrl = this.props.detailUrl;
	}

	onClicked(prodDetailUrl: string) {
		this.router.navigate(['shop/' + prodDetailUrl + '/' + this.product['id']]);
	}
	
	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
