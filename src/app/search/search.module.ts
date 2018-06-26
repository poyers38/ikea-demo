import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from '../search/search.component';
import { SearchListComponent } from '../search/search-list.component';
import { ProductSearchFilterPipe } from '../product/product-search-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
	SearchComponent, 
	SearchListComponent,
	ProductSearchFilterPipe
  ],
  exports: [
	SearchComponent, 
	SearchListComponent,
	ProductSearchFilterPipe
  ]
})
export class SearchModule { }
