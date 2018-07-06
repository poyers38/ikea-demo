import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { productCategoryGroupPipe } from './search.pipes/product-category-group.pipe';
import { productSubCategoryGroupPipe } from './search.pipes/product-sub-category-group.pipe';
import { productColorGroupPipe } from './search.pipes/product-color-group.pipe';
import { ProductFilterPipe } from './search.pipes/product-filter.pipe';
import { ProductFilterByCategoryPipe } from './search.pipes/product-filter-by-category.pipe';
import { ProductFilterBySubCategoryPipe } from './search.pipes/product-filter-by-subcategory.pipe';
import { ProductFilterByColorPipe } from './search.pipes/product-filter-by-color.pipe';
import { SearchRoutingModule } from './search-routing.module';
import { SearchListComponent } from './search-list.component';
import { ProductSearchFilterPipe } from '../product/product-search-filter.pipe';
import { SearchPopComponent } from './search-pop.component';
import { SearchPopItemComponent } from './search-pop-item.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { SearchService } from './search.service';
import { SearchIndexComponent } from './search-index.component';
import { SearchSidebarComponent } from './search-sidebar.component';
import { SearchListItemComponent } from './search-list-item.component';
import { SearchFilterComponent } from './search-filter.component';
import { SearchFilterMobileComponent } from './search-filter-mobile.component';
import { SearchBarComponent } from './search-bar.component';
import { ProductModule } from '../product/product.module';
import { SearchFilterColorModalComponent } from './search.modals/search-filter-color-modal.component';
import { SearchFilterCategoryModalComponent } from './search.modals/search-filter-category-modal.component';
import { SearchFilterSubCategoryModalComponent } from './search.modals/search-filter-sub-category-modal.component';

@NgModule({
  imports: [
    CommonModule,
		RouterModule,
		SearchRoutingModule,
		ProductModule
  ],
  declarations: [ 
		SearchListComponent,
		ProductSearchFilterPipe,
		ProductFilterPipe,
		ProductFilterByCategoryPipe,
		ProductFilterBySubCategoryPipe,
		ProductFilterByColorPipe,
		productColorGroupPipe,
		SearchPopComponent,
		SearchPopItemComponent,
		SearchFilterPipe,
		SearchIndexComponent,
		productCategoryGroupPipe,
		productSubCategoryGroupPipe,
		SearchSidebarComponent,
		SearchListItemComponent,
		SearchFilterComponent,
		SearchFilterMobileComponent,
		SearchBarComponent,
		SearchFilterColorModalComponent,
		SearchFilterCategoryModalComponent,
		SearchFilterSubCategoryModalComponent
  ],
  exports: [
		SearchListComponent,
		SearchPopComponent,
		ProductSearchFilterPipe,
		SearchFilterPipe,
		productCategoryGroupPipe,
		productSubCategoryGroupPipe,
		productColorGroupPipe,
		ProductFilterPipe,
		ProductFilterByCategoryPipe,
		ProductFilterBySubCategoryPipe,
		ProductFilterByColorPipe,
		SearchFilterComponent,
		SearchBarComponent
  ],
  providers: [
		SearchService
  ]
})
export class SearchModule { }
