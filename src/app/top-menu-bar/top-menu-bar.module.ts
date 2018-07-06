import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchModule } from '../search/search.module';
import { TopMenuBarComponent } from './top-menu-bar.component';

@NgModule({
  imports: [
    CommonModule,
		RouterModule,
		SearchModule
  ],
  declarations: [ 
		TopMenuBarComponent
	],
  exports: [TopMenuBarComponent]
})
export class TopMenuBarModule { }
