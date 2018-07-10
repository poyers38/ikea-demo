import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbsModule } from "ng6-breadcrumbs";


import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductMenuCategoryMobileComponent } from './product-menu-category-mobile/product-menu-category-mobile.component';
import { ProductMenuSubCategoryMobileComponent } from './product-menu-category-mobile/product-menu-sub-category-mobile.component';
import { ShopComponent } from './shop.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list/product-list-item.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductGridItemComponent } from './product-grid/product-grid-item.component';	
import { IndexComponent } from './index.component';
import { DetailComponent } from './product-detail/detail.component';
import { ProductSidebarComponent } from './product-sidebar/product-sidebar.component';
import { ProductCategorySelectionComponent } from './product-category/product-category-selection.component';
import { ProductCategorySelectionItemComponent } from './product-category/product-category-selection-item.component';
import { ProductHomeComponent } from './product-home.component';
import { ProductImageFilterPipe } from './product-image-filter.pipe';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductSidebarMobileComponent } from './product-sidebar-mobile/product-sidebar-mobile.component';
import { ShopMobileComponent } from './shop-mobile.component';

import { SearchListComponent } from './product-search/search-list.component';
import { SearchBarComponent } from './product-search/search-bar.component';
import { SearchIndexComponent } from './product-search/search-index.component';
import { SearchMainComponent } from '../search/search-main.component';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
		BreadcrumbsModule,
		NgbModule,
		SharedModule
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
		ProductImageFilterPipe,
		ProductFilterPipe,
		ProductSidebarMobileComponent,
		ShopMobileComponent,
		ProductMenuCategoryMobileComponent,
		ProductMenuSubCategoryMobileComponent,
		SearchListComponent,
		SearchBarComponent,
		SearchIndexComponent,
		SearchMainComponent
		//ProductSearchFilterPipe
  ],
  exports: [
		ShopComponent, 
		ProductListItemComponent, 
		ProductGridComponent,
		ProductCategorySelectionComponent,
		BreadcrumbsModule
  ], 
  providers: [
		NgbCarouselConfig
  ]
})

export class ProductModule { }
