import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { Menubar } from './menubar.component';

@NgModule({
  imports: [
    CommonModule,
	RouterModule
  ],
  declarations: [Menubar],
  exports: [
	Menubar
  ]
})
export class MenubarModule { }
