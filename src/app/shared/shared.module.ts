// ./app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { GoWildDirective } from './goWild.directive';
import { ShowMenuDirective } from './showMenu.directive';
import { HighlightDirective } from './highlight.directive';
import { Highlight2Directive } from './highlight2.directive';

import { groupByName } from './group-by-name.pipe';
import { groupByCategory } from './group-by-category.pipe';
import { groupByMenuCategory } from './group-by-menuCategory.pipe';
import { productCategoryGroupPipe } from './product.pipes/product-category-group.pipe';
import { productSubCategoryGroupPipe } from './product.pipes/product-sub-category-group.pipe';
import { productColorGroupPipe } from './product.pipes/product-color-group.pipe';
import { ProductFilterByCategoryPipe } from './product.pipes/product-filter-by-category.pipe';
import { ProductFilterBySubCategoryPipe } from './product.pipes/product-filter-by-subcategory.pipe';
import { ProductFilterByColorPipe } from './product.pipes/product-filter-by-color.pipe';
import { ProductFilterPipe } from './product.pipes/product-filter.pipe';
import { ProductCategoryFilterPipe } from './product.pipes/product-category-filter.pipe';

@NgModule({
    declarations: [
			groupByName,
			groupByCategory,
			groupByMenuCategory,
			ProductFilterPipe,
			ProductCategoryFilterPipe,
			ProductFilterByCategoryPipe,
			ProductFilterBySubCategoryPipe,
			ProductFilterByColorPipe,
			productColorGroupPipe,
			productCategoryGroupPipe,
			productSubCategoryGroupPipe,
			HighlightDirective, 
			Highlight2Directive, 
			GoWildDirective, 
			ShowMenuDirective
    ],
    exports: [
			groupByName,
			groupByCategory,
			groupByMenuCategory,
			ProductCategoryFilterPipe,
			ProductFilterByCategoryPipe,
			ProductFilterBySubCategoryPipe,
			ProductFilterByColorPipe,
			productColorGroupPipe,
			productCategoryGroupPipe,
			productSubCategoryGroupPipe,
			HighlightDirective, 
			Highlight2Directive, 
			GoWildDirective, 
			ShowMenuDirective
    ]
})
export class SharedModule{}