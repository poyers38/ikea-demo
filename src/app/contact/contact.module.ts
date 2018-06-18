import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactDetailComponent } from './contact-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent, ContactDetailComponent],
  exports: [
	ContactComponent, ContactDetailComponent
  ]
})
export class ContactModule { }
