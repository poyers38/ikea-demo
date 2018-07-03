import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductCategory } from './product-category.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-category-selection-item-mobile',
  templateUrl: './product-category-selection-item-mobile.component.html'
})

export class ProductCategorySelectionItemMobileComponent implements OnInit, OnDestroy {
  @Input() productCategories: ProductCategory;
  @Input('productCategory') category: string;
  @Input('productViewType') productViewType: string;
  productParentUrl: string;
  private subProductParentUrl: Subscription;
	
  constructor(
		private productService: ProductService,
		private router: Router
  ) { 
		this.subProductParentUrl = this.productService.productParentUrl$.subscribe(
			(data: string) => {
				this.productParentUrl = data;
			}
		)				
  }

  ngOnInit() {
		console.log(this.category);
  }
  
  onClicked(prodCat: ProductCategory[]) {
		this.router.navigate(['./' + this.productParentUrl + '/products/' + this.category + '/' + this.productViewType + '/' + prodCat['name']]);
	}
	
	ngOnDestroy() {
		this.subProductParentUrl.unsubscribe();
	}
}
