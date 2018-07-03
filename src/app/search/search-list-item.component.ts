import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../product/product';

@Component({
  selector: 'app-search-list-item',
  templateUrl: './search-list-item.component.html',
  styleUrls: ['./search-list-item.component.scss']
})
export class SearchListItemComponent implements OnInit {
	@Input('product') product: Product[]; 
  constructor() { }

  ngOnInit() {
  }

}
