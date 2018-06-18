import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { CarouselComponent } from './carousel.component';


@NgModule({
	imports: [RouterModule.forChild([
      { path: 'home', component: IndexComponent},
  ])],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
