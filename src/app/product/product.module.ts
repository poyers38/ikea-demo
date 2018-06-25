import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbsModule } from "ng6-breadcrumbs";

import { ProductMenuCategoryMobileModule } from './product-menu-category-mobile/product-menu-category-mobile.module';
import { ShopComponent } from './shop.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list/product-list-item.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductGridItemComponent } from './product-grid/product-grid-item.component';	
import { ProductRoutingModule } from './product-routing.module';
import { IndexComponent } from './index.component';
import { DetailComponent } from './product-detail/detail.component';
import { ProductSidebarComponent } from './product-sidebar/product-sidebar.component';
import { ProductCategorySelectionComponent } from './product-category/product-category-selection.component';
import { ProductCategorySelectionItemComponent } from './product-category/product-category-selection-item.component';
import { ProductHomeComponent } from './product-home.component';
import { ProductCategoryFilterPipe } from './product-category/product-category-filter.pipe';
import { ProductSearchFilterPipe } from './product-search-filter.pipe';
import { ProductBySubCategoryFilterPipe } from './product-sub-category-filter.pipe';
import { ProductImageFilterPipe } from './product-image-filter.pipe';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductSidebarMobileComponent } from './product-sidebar-mobile/product-sidebar-mobile.component';
import { ShopMobileComponent } from './shop-mobile.component';
import { ProductCategorySelectionItemMobileComponent } from './product-category/product-category-selection-item-mobile.component';
import { SearchListComponent } from './product-search/search-list.component';
import { SearchBarComponent } from './product-search/search-bar.component';
import { SearchIndexComponent } from './product-search/search-index.component';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
	ProductMenuCategoryMobileModule,
	BreadcrumbsModule,
	NgbModule
  ],
  declarations: [
	ShopComponent, 
	ProductListComponent, 
	ProductGridComponent, 
	IndexComponent, 
	DetailComponent, 
	ProductGridItemComponent, 
	ProductListItemComponent, 
	ProductSidebarComponent, 
	ProductCategorySelectionComponent, 
	ProductCategorySelectionItemComponent,
	ProductHomeComponent,
	ProductCategoryFilterPipe,
	ProductBySubCategoryFilterPipe,
	ProductImageFilterPipe,
	ProductFilterPipe,
	ProductSidebarMobileComponent,
	ShopMobileComponent,
	ProductCategorySelectionItemMobileComponent,
	SearchListComponent,
	SearchBarComponent,
	SearchIndexComponent,
	ProductSearchFilterPipe
  ],
  exports: [
	ShopComponent, 
	ProductListComponent, 
	ProductGridComponent,
	ProductCategorySelectionComponent,
	ProductCategoryFilterPipe,
	BreadcrumbsModule
  ], 
  providers: [
	NgbCarouselConfig
  ]
})

export class ProductModule { }
