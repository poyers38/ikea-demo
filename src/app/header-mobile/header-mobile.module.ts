import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenubarMobileModule } from '../menubar-mobile/menubar-mobile.module';
import { SearchModule } from '../search/search.module';
//import { ProductSearchFilterPipe } from '../product/product-search-filter.pipe';

import { HeaderMobileComponent } from './header-mobile.component';
import { TopMenuBarModule } from '../top-menu-bar/top-menu-bar.module';


@NgModule({
  imports: [
    CommonModule,
	MenubarMobileModule,
	TopMenuBarModule,
	SearchModule,
	RouterModule
  ],
  declarations: [HeaderMobileComponent],
  exports: [
	HeaderMobileComponent
  ]
})
export class HeaderMobileModule { }
