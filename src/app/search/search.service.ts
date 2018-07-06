import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { Product } from '../product/product';
import { Search } from './search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
	isFilterOpenSource = new BehaviorSubject<boolean>(false);
  isFilterOpenOpen$ = this.isFilterOpenSource.asObservable();
  isFilterOpen: boolean;
	
  constructor() { 
	
  }
  
	changeFilterState(data: boolean) {
		this.isFilterOpenSource.next(data);
  }
  
}
	