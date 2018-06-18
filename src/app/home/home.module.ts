import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel.component';
import { IndexComponent } from './index.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
	HomeRoutingModule
  ],
  declarations: [HomeComponent, CarouselComponent, IndexComponent]
})
export class HomeModule { }
