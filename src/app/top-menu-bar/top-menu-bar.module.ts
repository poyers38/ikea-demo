import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopMenuBarComponent } from './top-menu-bar.component';

@NgModule({
  imports: [
    CommonModule,
	RouterModule
  ],
  declarations: [TopMenuBarComponent],
  exports: [TopMenuBarComponent]
})
export class TopMenuBarModule { }
