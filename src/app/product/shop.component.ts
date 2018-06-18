import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationStart, NavigationEnd, NavigationError, Event  } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html'
})

export class ShopComponent {
  breadcrumb: any;
  sub: any;
  category: string;
  
  constructor(
	private router: Router,
	private route: ActivatedRoute
  ) { 
  }
}
