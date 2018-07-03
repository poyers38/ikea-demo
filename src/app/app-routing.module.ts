import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './home/index.component' ;

export const routes: Routes = [
  {
		path: '',
		component: IndexComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],  
    exports: [RouterModule]
})
export class AppRoutingModule { }
