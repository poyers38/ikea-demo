import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductMenuCategoryMobileComponent } from './product-menu-category-mobile.component';

@NgModule({
  imports: [
    CommonModule,
	RouterModule
  ],
  declarations: [ProductMenuCategoryMobileComponent],
  exports: [
	ProductMenuCategoryMobileComponent
  ]
})

export class ProductMenuCategoryMobileModule { }
