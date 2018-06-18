import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MenubarMobile } from './menubar-mobile.component';

@NgModule({
  imports: [
    CommonModule,
	RouterModule
  ],
  declarations: [MenubarMobile],
  exports: [
	MenubarMobile
  ]
})
export class MenubarMobileModule { }
