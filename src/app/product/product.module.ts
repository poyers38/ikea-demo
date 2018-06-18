import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { ProductMenuCategoryMobileModule } from './product-menu-category-mobile/product-menu-category-mobile.module';
import { ShopComponent } from './shop.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { ProductListComponent } from './product-list.component';
import { ProductGridComponent } from './product-grid.component';
import { ProductRoutingModule } from './product-routing.module';
import { IndexComponent } from './index.component';
import { DetailComponent } from './detail.component';
import { ProductGridItemComponent } from './product-grid-item.component';						
import { ProductListItemComponent } from './product-list-item.component';
import { ProductSidebarComponent } from './product-sidebar.component';
import { ProductCategorySelectionComponent } from './product-category/product-category-selection.component';
import { ProductCategorySelectionItemComponent } from './product-category/product-category-selection-item.component';
import { ProductHomeComponent } from './product-home.component';
import { ProductService } from './product.service';
import { ProductCategoryFilterPipe } from './product-category/product-category-filter.pipe';
import { ProductBySubCategoryFilterPipe } from './product-sub-category-filter.pipe';
import { BreadcrumbsModule } from "ng6-breadcrumbs";
import { ProductSidebarDirective } from './product-sidebar.directive';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductSidebarMobileComponent } from './product-sidebar-mobile.component';
import { ShopMobileComponent } from './shop-mobile.component';
import { ProductCategorySelectionItemMobileComponent } from './product-category/product-category-selection-item-mobile.component';


@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
	SidebarModule,
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
	ProductSidebarDirective,
	ProductFilterPipe,
	ProductSidebarMobileComponent,
	ShopMobileComponent,
	ProductCategorySelectionItemMobileComponent
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
	ProductService,
	NgbCarouselConfig
  ]
})

export class ProductModule { }
