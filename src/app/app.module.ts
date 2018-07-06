import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbsModule } from "ng6-breadcrumbs";

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { HeaderMobileModule } from './header-mobile/header-mobile.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { FooterModule } from './footer/footer.module';
import { CopyrightModule } from './copyright/copyright.module';
import { MenubarModule } from './menubar/menubar.module';
//import { TopMenuBarModule } from './top-menu-bar/top-menu-bar.module';
import { SearchModule } from './search/search.module';
//import { SearchBarComponent } from './search/search-bar.component';

import { IndexComponent } from './index.component';
import { AppComponent } from './app.component';
import { ProductService } from './product/product.service';
import { ProductCategoryFilterPipe } from './product/product-category/product-category-filter.pipe';
import { ModalContentComponent } from './modal.component';
import { SearchFilterColorModalComponent } from './search/search.modals/search-filter-color-modal.component';
import { SearchFilterCategoryModalComponent } from './search/search.modals/search-filter-category-modal.component';
import { SearchFilterSubCategoryModalComponent } from './search/search.modals/search-filter-sub-category-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
		ModalContentComponent
  ],
  imports: [
    BrowserModule,
		HttpModule,
		ReactiveFormsModule,
		RouterModule,
		BreadcrumbsModule,
		AppRoutingModule,
		HeaderModule,
		HeaderMobileModule,
		HomeModule,
		ProductModule,
		FooterModule,
		CopyrightModule,
		MenubarModule,
		SharedModule,
		//TopMenuBarModule,
		ModalModule.forRoot()
  ],
  providers: [
		ProductService
  ],
  bootstrap: [AppComponent],
  exports: [
		BreadcrumbsModule,
		ProductModule,
		ModalModule,
		ModalContentComponent
  ],
	entryComponents: [
		ModalContentComponent,
		SearchFilterColorModalComponent,
		SearchFilterCategoryModalComponent,
		SearchFilterSubCategoryModalComponent
	]
})
export class AppModule { }
