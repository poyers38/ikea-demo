import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError, Event, Params } from '@angular/router';
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
	screenMinHeight: number;
  private sub: any;
  private currentParentUrl: string;
  private currentUrl: string;
  private deviceType: string;
  private subDeviceType: Subscription;
  private subRouterEvents: Subscription;
  private subRouterParams: Subscription;
  private subProductParentUrl: Subscription;
  private subSearchBar: Subscription;
  private subRouterQueryParams: Subscription;
	private queryParams: Params;
	
  constructor(
		private productService: ProductService,
		public router: Router,
		private route: ActivatedRoute
  ) {
		this.subRouterEvents = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((route: ActivatedRoute) => {
			console.log('sub');
			this.currentParentUrl = this.router.url.split('/')[1];
			this.productService.changeWindowSize(window.innerWidth);
			//this.openSearchBar();
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
		);
		this.subRouterQueryParams = this.route.queryParams.subscribe(
			(params) => {
				this.queryParams = params;
				console.log(this.queryParams);
			}
		);
		this.subProductParentUrl = this.productService.productParentUrl$.subscribe(
			(data: string) => {
				this.productParentUrl = data;
				if (this.productParentUrl != this.currentParentUrl && this.currentParentUrl != undefined) {
					this.urlParts = this.router.url.split('/');
					this.newUrl = '';
					let i = 1;
					for (let item of this.urlParts) {
						if (i === 2)
							this.newUrl = '/' + this.productParentUrl;
						else 
							this.newUrl = this.newUrl + '/' + decodeURIComponent(item);
							console.log(decodeURIComponent(item));
						i = i + 1;
					}
					this.newUrl = this.newUrl.split('?')[0];
					this.router.navigate([this.newUrl], { queryParams: this.queryParams});
				}
			}
		);
		this.subSearchBar = this.productService.isSearchBarMobileOpen$.subscribe(
			(data: boolean) => {
				this.isSearchBarMobileOpen = data;
			}
		);		
  }
  /*
  openSearchBar() {
		if (this.router.url == '/m.shop/search') 
			this.isSearchBarMobileOpen2 = true;
		else
			this.isSearchBarMobileOpen2 = false;
	}
	*/
  ngOnInit() {
		this.show = true;
		this.showMobile = false;
		this.productService.changeWindowSize(window.innerWidth);
		this.screenHeight = window.innerHeight;
		if (this.showMobile)
			this.screenMinHeight = 400;
		else	
			this.screenMinHeight = this.screenHeight - 350;
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
		this.screenHeight = event.target.innerHeight;
  }
  
  ngOnDestroy() {
		this.subDeviceType.unsubscribe();
		this.subRouterEvents.unsubscribe();
		this.subProductParentUrl.unsubscribe();
		this.subSearchBar.unsubscribe();
		this.subRouterQueryParams.unsubscribe();
  }
}
