import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ProductCategory } from './product-category.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-category-selection-item-mobile',
  templateUrl: './product-category-selection-item-mobile.component.html'
})

export class ProductCategorySelectionItemMobileComponent implements OnInit {
  @Input() productCategories: ProductCategory;
  @Input('productCategory') category: string;
  @Input('productViewType') productViewType: string;
  
  constructor(
	private productService: ProductService,
	private router: Router
  ) { 
  }

  ngOnInit() {
	console.log(this.category);
  }
  
  onClicked(prodCat: ProductCategory[]) {
	this.router.navigate(['./m.shop/' + this.category + '/' + this.productViewType + '/' + prodCat['name']]);
   }
}
