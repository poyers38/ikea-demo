import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductCategorySelectionComponent } from './product-category/product-category-selection.component';
import { ShopComponent } from './shop.component';
import { ShopMobileComponent } from './shop-mobile.component';
import { IndexComponent } from './index.component';
import { DetailComponent } from './product-detail/detail.component';
import { ProductHomeComponent } from './product-home.component';
import { ProductMenuCategoryMobileComponent } from './product-menu-category-mobile/product-menu-category-mobile.component';
import { SearchIndexComponent } from './product-search/search-index.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ 
			path: 'shop', 
			component: ShopComponent,
			children: [
				{ 
					path: ':productCategory', 
					component: ProductCategorySelectionComponent,
					pathMatch: 'full'
				},
				{ 
					path: '', 
					component: ProductHomeComponent,
					pathMatch: 'full',
					data: {
						breadcrumb: ''
					}
				},
				{ 
					path: 'default', 
					component: ProductHomeComponent,
					pathMatch: 'full',
					data: {
						breadcrumb: 'ProductHomeComponent'
					}
				},
				{ 
					path: ':productCategory/product-list/:productSubCategory', 
					component: ProductGridComponent,
					pathMatch: 'full',
					data: {
						breadcrumb: 'ProductGridComponent'
					}
				},
				{ 
					path: ':productCategory/product-grid/:productSubCategory', 
					component: ProductGridComponent,
					pathMatch: 'full',
					data: {
						breadcrumb: 'ProductGridComponent'
					}
				}
			]
		},
		{ 
			path: 'shop/:productCategory/:productSubCategory/detail/:productCode', 
			component: DetailComponent
		},
		{ 
			path: 'm.shop', 
			component: ShopMobileComponent,
			children: [
				{ 
					path: 'search', 
					component: SearchIndexComponent,	
					pathMatch: 'full'
				},
				{ 
					path: ':productCategory', 
					component: ProductCategorySelectionComponent,
					pathMatch: 'full',
					data: {
						breadcrumb: ''
					}
				},
				{ 
					path: '', 
					component: ProductMenuCategoryMobileComponent,
					pathMatch: 'full'
				},
				{ 
					path: 'default', 
					component: ProductHomeComponent,
					pathMatch: 'full'
				},
				{ 
					path: ':productCategory/product-list/:productSubCategory', 
					component: ProductGridComponent
				},
				{ 
					path: ':productCategory/product-grid/:productSubCategory', 
					component: ProductGridComponent,
					pathMatch: 'full'
				},
				{ 
					path: ':productCategory/:productSubCategory/detail/:productCode', 
					component: DetailComponent
				}
			]
		}		
	])],
	exports: [RouterModule]
})
export class ProductRoutingModule { }
