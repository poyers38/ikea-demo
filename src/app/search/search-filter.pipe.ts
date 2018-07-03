import { Pipe, PipeTransform } from '@angular/core';
import { Search } from './search';

@Pipe({
  name: 'searchFilterPipe',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {
  transform(searchs: Search[], input: string): Search[] {
	if (input) {
		input = input.toLowerCase();
		return searchs.filter(Search => Search.name.toLowerCase().indexOf(input) > -1);
	}
	else {
		return searchs.filter(Search => Search.name.toLowerCase().indexOf("xxxxxxxxxxxxxxx") > -1);
	}
  }
}
