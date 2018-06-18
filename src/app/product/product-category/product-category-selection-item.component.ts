import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from './product-category.class';
import { PRODUCTCATEGORY } from '../mock-product-category';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-category-selection-item',
  templateUrl: './product-category-selection-item.component.html',
  styleUrls: ['./product-category-selection-item.component.scss']
})
export class ProductCategorySelectionItemComponent implements OnInit {
  @Input() productCategory: ProductCategory[] = [];
  se: string;
  productViewType: string;
  
  constructor(
	private _router: Router,
	private productService: ProductService
  ) { }

  ngOnInit() {
  }

   onClicked(prodCat: ProductCategory[]) {
		this.productService.productViewType$.subscribe(data => { this.productViewType = data; });
		this._router.navigate(['./shop/' + this.productCategory.category + '/' + this.productViewType + '/' + this.productCategory.name]);
   }
}


