import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FooterMobileComponent } from './footer-mobile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
	FooterComponent, 
	FooterMobileComponent
  ],
  exports: [
	FooterComponent, 
	FooterMobileComponent
  ]
})
export class FooterModule { }
