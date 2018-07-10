import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { SearchRoutingModule } from './search-routing.module';
import { SearchListComponent } from './search-list.component';
import { SearchPopComponent } from './search-pop.component';
import { SearchPopItemComponent } from './search-pop-item.component';
import { SearchService } from './search.service';
import { SearchIndexComponent } from './search-index.component';
import { SearchSidebarComponent } from './search-sidebar.component';
import { SearchListItemComponent } from './search-list-item.component';
import { SearchFilterComponent } from './search-filter.component';
import { SearchFilterMobileComponent } from './search-filter-mobile.component';
import { SearchBarComponent } from './search-bar.component';
import { ProductModule } from '../product/product.module';
import { SharedModule } from '../shared/shared.module';
import { SearchFilterColorModalComponent } from './search.modals/search-filter-color-modal.component';
import { SearchFilterCategoryModalComponent } from './search.modals/search-filter-category-modal.component';
import { SearchFilterSubCategoryModalComponent } from './search.modals/search-filter-sub-category-modal.component';
import { ProductSearchFilterPipe } from '../product/product-search-filter.pipe';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
		RouterModule,
		SearchRoutingModule,
		ProductModule,
		SharedModule
  ],
  declarations: [ 
		SearchListComponent,
		ProductSearchFilterPipe,
		SearchPopComponent,
		SearchPopItemComponent,
		SearchFilterPipe,
		SearchIndexComponent,
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
		SearchFilterComponent,
		SearchBarComponent
  ],
  providers: [
		SearchService
  ]
})
export class SearchModule { }
