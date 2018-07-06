import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from './product-category.class';
import { ProductService } from '../product.service';

class ProdCatProps {
	productCategory: ProductCategory[];
	parentUrl: string;
	productViewType: string;
}

@Component({
  selector: 'app-product-category-selection-item',
  templateUrl: './product-category-selection-item.component.html',
  styleUrls: ['./product-category-selection-item.component.scss']
})
export class ProductCategorySelectionItemComponent implements OnInit {
  se: string;
	@Input('prodCatProps') prodCatProps: ProdCatProps[];
	
  constructor(
		private _router: Router,
		private productService: ProductService
  ) { }

  ngOnInit() {
		console.log('aaa');
		console.log(this.prodCatProps);
  }

	onClicked(prodCat: ProductCategory) {
		this._router.navigate(['./' + this.prodCatProps['parentUrl'] + '/products/' + this.prodCatProps['productCategory'].category + '/' + this.prodCatProps['productViewType'] + '/' + this.prodCatProps['productCategory'].name]);
	}
}


