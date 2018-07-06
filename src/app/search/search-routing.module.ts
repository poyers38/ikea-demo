import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchIndexComponent } from './search-index.component';
import { DetailComponent } from '../product/product-detail/detail.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ 
			path: 'ikea/search/:query', 
			component: SearchIndexComponent
		},
		{ 
			path: 'm.ikea/search/:query', 
			component: SearchIndexComponent
		},
		{ 
			path: 'ikea/search/detail/:productCode', 
			component: DetailComponent
		},	
		{ 
			path: 'm.ikea/search/detail/:productCode', 
			component: DetailComponent
		}			
	])],
	exports: [RouterModule]
})
export class SearchRoutingModule { }
