import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError, Event } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ProductService } from './product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements 
	OnInit, 
	OnDestroy
{
  title = 'app11111111';
  innerWidth: string;
  show: boolean;
  showMobile: boolean;
  productParentUrl: string;
  isSearchBarMobileOpen: boolean;
  isSearchBarMobileOpen2: boolean;
  urlParts: string[];
  newUrl: string;
  screenWidth: number;
  screenHeight: number;
  private sub: any;
  private currentParentUrl: string;
  private currentUrl: string;
  private deviceType: string;
  private subDeviceType: Subscription;
  private subRouterEvents: Subscription;
  private subRouterParams: Subscription;
  private subProductParentUrl: Subscription;
  private subSearchBar: Subscription;
  
  constructor(
	private productService: ProductService,
	private router: Router,
	private route: ActivatedRoute
  ) {
		this.subRouterEvents = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((route: ActivatedRoute) => {
			console.log('sub');
			this.currentParentUrl = this.router.url.split('/')[1];
			this.productService.changeWindowSize(window.innerWidth);
			this.openSearchBar();
        });
		this.subDeviceType = this.productService.deviceType$.subscribe(
			(data: string) => {
				this.deviceType = data;
				if (this.deviceType == 'mobile') {
					this.show = false;
					this.showMobile = true;
				} else {
					this.show = true;
					this.showMobile = false;
				}
			}
		)
		this.subProductParentUrl = this.productService.productParentUrl$.subscribe(
			(data: string) => {
				this.productParentUrl = data;
				
				console.log('router.url.: ' + this.router.url);
				//console.log('currentParentUrl: ' + this.currentParentUrl);
				if (this.productParentUrl != this.currentParentUrl && this.currentParentUrl != undefined) {
					this.urlParts = this.router.url.split('/');
					this.urlParts = this.router.url.split('/');
					this.newUrl = '';
					let i = 1;
					//console.log(urlParts);
					for (let item of this.urlParts) {
						if (i === 2)
							this.newUrl = '/' + this.productParentUrl;
						else 
							this.newUrl = this.newUrl + '/' + decodeURIComponent(item);
							//console.log(encodeURI(item));
						i = i + 1;
						
					}
					//console.log('CHANGED URL'	);
					this.router.navigate([this.newUrl]);
				}
			}
		)
		this.subSearchBar = this.productService.isSearchBarMobileOpen$.subscribe(
			(data: boolean) => {
				this.isSearchBarMobileOpen = data;
			}
		)		
  }
  
  openSearchBar() {
	if (this.router.url == '/m.shop/search') 
		this.isSearchBarMobileOpen2 = true;
	else
		this.isSearchBarMobileOpen2 = false;
}

  ngOnInit() {
	this.show = true;
	this.showMobile = false;
	this.productService.changeWindowSize(window.innerWidth);
  }
  
  renderDisplay(size) {
	if (size < 991) {
		this.show = false;
		this.showMobile = true;
	}
	else {
		this.show = true;
		this.showMobile = false;
	}
  }
  
  onResize(event) {
	this.renderDisplay(event.target.innerWidth);
	this.productService.changeWindowSize(event.target.innerWidth);
  }
  
  ngOnDestroy() {
	this.subDeviceType.unsubscribe();
	this.subRouterEvents.unsubscribe();
	this.subProductParentUrl.unsubscribe();
	this.subSearchBar.unsubscribe();
  }
}
