import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { SharedModule } from '../shared/shared.module';
import { MenubarModule } from '../menubar/menubar.module';
import { TopMenuBarModule } from '../top-menu-bar/top-menu-bar.module';

@NgModule({
  imports: [
	SharedModule, 
	RouterModule,
	MenubarModule,
	TopMenuBarModule
  ],	
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
 })
export class HeaderModule { }
