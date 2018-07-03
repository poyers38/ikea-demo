import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GroupByPipe } from './search.pipes/groupBy.pipe';
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
import { SearchMobileIndexComponent } from './search-mobile-index.component';
import { SearchSidebarComponent } from './search-sidebar.component';
import { SearchListItemComponent } from './search-list-item.component';
import { SearchFilterComponent } from './search-filter.component';

@NgModule({
  imports: [
    CommonModule,
		RouterModule,
		SearchRoutingModule
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
		SearchMobileIndexComponent,
		GroupByPipe,
		productCategoryGroupPipe,
		productSubCategoryGroupPipe,
		SearchSidebarComponent,
		SearchListItemComponent,
		SearchFilterComponent
  ],
  exports: [
		SearchListComponent,
		SearchPopComponent,
		ProductSearchFilterPipe,
		SearchFilterPipe,
		GroupByPipe,
		productCategoryGroupPipe,
		productSubCategoryGroupPipe,
		productColorGroupPipe,
		ProductFilterPipe,
		ProductFilterByCategoryPipe,
		ProductFilterBySubCategoryPipe,
		ProductFilterByColorPipe,
		SearchFilterComponent
  ],
  providers: [
		SearchService
  ]
})
export class SearchModule { }
