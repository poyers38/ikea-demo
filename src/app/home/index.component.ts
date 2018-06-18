import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  constructor(
	private productService: ProductService
  ) { }

  ngOnInit() {
  }

}
