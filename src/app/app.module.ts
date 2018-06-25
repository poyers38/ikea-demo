import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbsModule } from "ng6-breadcrumbs";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { HeaderMobileModule } from './header-mobile/header-mobile.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { FooterModule } from './footer/footer.module';
import { CopyrightModule } from './copyright/copyright.module';
import { MenubarModule } from './menubar/menubar.module';
import { IndexComponent } from './index.component';
import { ProductService } from './product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
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
	SharedModule
  ],
  providers: [
	ProductService
  ],
  bootstrap: [AppComponent],
  exports: [
	BreadcrumbsModule
  ]
})
export class AppModule { }
