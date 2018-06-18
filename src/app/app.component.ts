import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError, Event } from '@angular/router';

import { ProductService } from './product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app11111111';
  innerWidth: string;
  show: boolean;
  showMobile: boolean;
  productParentUrl: string;
  urlParts: string[];
  newUrl: string;
  screenWidth: number;
  screenHeight: number;
  private sub: any;
  private currentParentUrl: string;
  private currentUrl: string;
  private deviceType: string;
  
  constructor(
	private productService: ProductService,
	private router: Router,
	private route: ActivatedRoute
  ) {
		router.events.subscribe( (event: Event) => {
			if (event instanceof NavigationStart) {
			}
			if (event instanceof NavigationEnd) {
				console.log(this.router);
				this.currentParentUrl = this.router.url.split('/')[1];
				this.productService.changeWindowSize(window.innerWidth);
				//console.log('productParentUrl 2: ' + this.productParentUrl);
				//console.log('currentParentUrl 2: ' + this.currentParentUrl);
			}
			if (event instanceof NavigationError) {
				// Hide loading indicator
				// Present error to user
				console.log(event.error);
			}
		});
			
		this.productService.productParentUrl$.subscribe(
			(data: string) => {
				this.productParentUrl = data;
				
				//console.log('productParentUrl: ' + this.productParentUrl);
				//console.log('currentParentUrl: ' + this.currentParentUrl);
				if (this.productParentUrl != this.currentParentUrl && this.currentParentUrl != undefined) {
					this.urlParts = this.router.url.split('/');
					this.urlParts = this.router.url.split('/');
					this.newUrl = '';
					let i = 1;
					
					for (let item of this.urlParts) {
						if (i === 2)
							this.newUrl = '/' + this.productParentUrl;
						else 
							this.newUrl = this.newUrl + '/' + decodeURIComponent(item);
							//console.log(encodeURI(item));
						i = i + 1;
						
					}
					console.log('CHANGED URL'	);
					this.router.navigate([this.newUrl]);
				}
			}
		)	
		
		
  }
  
  ngOnInit() {
	this.show = true;
	this.showMobile = false;
	this.productService.changeWindowSize(window.innerWidth);

	this.sub = this.productService.deviceType$.subscribe(
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
	this.sub.unsubscribe();
  }
}
