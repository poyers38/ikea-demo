import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

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
	private subDeviceType: Subscription;
	deviceType: string;
	
	constructor(
		private router: Router,
		private productService: ProductService,
	) {
		this.subDeviceType = this.productService.deviceType$.subscribe(
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
		this.router.navigate([prodDetailUrl + '/' + this.product['id']]);
	}
}
