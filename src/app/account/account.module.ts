import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountFooterComponent } from './account-footer.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [AccountFooterComponent],
  exports: [
	AccountFooterComponent
  ]
})
export class AccountModule { }
