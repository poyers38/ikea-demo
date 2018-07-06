import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from '../product/product';

@Component({
  selector: 'app-search-list-item',
  templateUrl: './search-list-item.component.html',
  styleUrls: ['./search-list-item.component.scss']
})
export class SearchListItemComponent implements OnInit {
	@Input('product') product: Product[]; 
	@Input('parentUrl') parentUrl: string;

  constructor(
		private router: Router,
	) {
	}
	
  ngOnInit() {
  }
	
	onClickProduct() {
		let detailUrl = this.parentUrl + '/search/detail/' + this.product['id'];
		this.router.navigate([detailUrl]);
	}
}