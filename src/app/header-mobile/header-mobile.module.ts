import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMobileComponent } from './header-mobile.component';
import { MenubarMobileModule } from '../menubar-mobile/menubar-mobile.module';
import { TopMenuBarModule } from '../top-menu-bar/top-menu-bar.module';

@NgModule({
  imports: [
    CommonModule,
	MenubarMobileModule,
	TopMenuBarModule
  ],
  declarations: [HeaderMobileComponent],
  exports: [
	HeaderMobileComponent
  ]
})
export class HeaderMobileModule { }
