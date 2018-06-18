import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsListComponent } from './tags-list.component';

@NgModule({
  imports: [
    CommonModule,
    TagsRoutingModule
  ],
  declarations: [TagsListComponent],
  exports: [
	TagsListComponent
  ]
})
export class TagsModule { }
