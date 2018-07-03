import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchIndexComponent } from './search-index.component';
import { SearchMobileIndexComponent } from './search-mobile-index.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ 
			path: 'ikea/search/:query', 
			component: SearchIndexComponent
		},
		{ 
			path: 'm.ikea/search/:query', 
			component: SearchMobileIndexComponent
		}		
	])],
	exports: [RouterModule]
})
export class SearchRoutingModule { }
