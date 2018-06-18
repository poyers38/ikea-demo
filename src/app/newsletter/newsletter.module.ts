import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsletterRoutingModule } from './newsletter-routing.module';
import { NewsletterAddComponent } from './newsletter-add.component';

@NgModule({
  imports: [
    CommonModule,
    NewsletterRoutingModule
  ],
  declarations: [NewsletterAddComponent],
  exports: [
	NewsletterAddComponent
  ]  
})
export class NewsletterModule { }
